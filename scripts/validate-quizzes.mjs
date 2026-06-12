import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
let ts;

try {
  ts = require("typescript");
} catch {
  console.error("Quiz validation failed: TypeScript is not installed. Run npm install, then try again.");
  process.exit(1);
}

const quizDataPath = resolve("src/data/quizzes.ts");
const sourceText = readFileSync(quizDataPath, "utf8");
const sourceFile = ts.createSourceFile(quizDataPath, sourceText, ts.ScriptTarget.Latest, true);
const validAnswers = new Set(["A", "B", "C", "D"]);
const errors = [];

function getExportedArray(name) {
  let found;

  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.name.getText(sourceFile) === name) {
      found = node.initializer;
      return;
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (!found || !ts.isArrayLiteralExpression(found)) {
    errors.push(`Could not find exported ${name} array in src/data/quizzes.ts.`);
    return [];
  }

  return found.elements;
}

function getProperty(objectNode, propertyName) {
  if (!ts.isObjectLiteralExpression(objectNode)) return undefined;

  return objectNode.properties.find((property) => {
    if (!ts.isPropertyAssignment(property)) return false;

    const name = property.name;

    return (
      (ts.isIdentifier(name) && name.text === propertyName) ||
      (ts.isStringLiteral(name) && name.text === propertyName)
    );
  })?.initializer;
}

function readString(node) {
  if (!node) return undefined;

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  return undefined;
}

function readStringArray(node) {
  if (!node || !ts.isArrayLiteralExpression(node)) return undefined;

  return node.elements.map((element) => readString(element));
}

function parseCategory(node, index) {
  return {
    index,
    name: readString(getProperty(node, "name"))
  };
}

function parseQuestion(node, quizId, index) {
  if (ts.isCallExpression(node) && node.expression.getText(sourceFile) === "q") {
    return {
      quizId,
      index,
      id: readString(node.arguments[0]),
      choices: readStringArray(node.arguments[2]),
      correctAnswer: readString(node.arguments[3]),
      explanation: readString(node.arguments[4])
    };
  }

  if (ts.isObjectLiteralExpression(node)) {
    return {
      quizId,
      index,
      id: readString(getProperty(node, "id")),
      choices: readStringArray(getProperty(node, "choices")),
      correctAnswer: readString(getProperty(node, "correctAnswer")),
      explanation: readString(getProperty(node, "explanation"))
    };
  }

  return { quizId, index };
}

function parseQuiz(node, index) {
  const id = readString(getProperty(node, "id"));
  const category = readString(getProperty(node, "category"));
  const questionsNode = getProperty(node, "questions");
  const questionElements = ts.isArrayLiteralExpression(questionsNode) ? questionsNode.elements : undefined;

  return {
    index,
    id,
    category,
    questions: questionElements?.map((questionNode, questionIndex) => parseQuestion(questionNode, id ?? `quiz ${index + 1}`, questionIndex))
  };
}

const categories = getExportedArray("categories").map(parseCategory);
const quizzes = getExportedArray("quizzes").map(parseQuiz);
const categoryNames = new Set(categories.map((category) => category.name).filter(Boolean));
const quizIds = new Map();
const questionIds = new Map();
let questionCount = 0;

for (const category of categories) {
  if (!category.name) {
    errors.push(`Category ${category.index + 1} is missing a name.`);
  }
}

for (const quiz of quizzes) {
  const quizLabel = quiz.id ? `Quiz "${quiz.id}"` : `Quiz ${quiz.index + 1}`;

  if (!quiz.id) {
    errors.push(`${quizLabel} is missing an id.`);
  } else if (quizIds.has(quiz.id)) {
    errors.push(`${quizLabel} has a duplicate quiz id. First seen at quiz ${quizIds.get(quiz.id) + 1}.`);
  } else {
    quizIds.set(quiz.id, quiz.index);
  }

  if (!quiz.category) {
    errors.push(`${quizLabel} is missing a category.`);
  } else if (!categoryNames.has(quiz.category)) {
    errors.push(`${quizLabel} uses invalid category "${quiz.category}".`);
  }

  if (!quiz.questions) {
    errors.push(`${quizLabel} has a missing or invalid questions array.`);
    continue;
  }

  if (quiz.questions.length === 0) {
    errors.push(`${quizLabel} must contain at least one question.`);
  }

  for (const question of quiz.questions) {
    questionCount += 1;
    const questionLabel = question.id ? `${quizLabel}, question "${question.id}"` : `${quizLabel}, question ${question.index + 1}`;

    if (!question.id) {
      errors.push(`${questionLabel} is missing an id.`);
    } else if (questionIds.has(question.id)) {
      errors.push(`${questionLabel} has a duplicate question id. First seen in quiz "${questionIds.get(question.id)}".`);
    } else {
      questionIds.set(question.id, quiz.id ?? `quiz ${quiz.index + 1}`);
    }

    if (!question.choices) {
      errors.push(`${questionLabel} has a missing or invalid choices array.`);
    } else if (question.choices.length !== 4) {
      errors.push(`${questionLabel} has ${question.choices.length} choices; expected exactly 4.`);
    } else {
      question.choices.forEach((choice, choiceIndex) => {
        if (typeof choice !== "string" || choice.trim().length === 0) {
          errors.push(`${questionLabel} has an empty choice ${choiceIndex + 1}.`);
        }
      });
    }

    if (!validAnswers.has(question.correctAnswer)) {
      errors.push(`${questionLabel} has invalid correctAnswer "${question.correctAnswer ?? ""}"; expected A, B, C, or D.`);
    }

    if (typeof question.explanation !== "string" || question.explanation.trim().length === 0) {
      errors.push(`${questionLabel} is missing an explanation.`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Quiz validation failed with ${errors.length} error${errors.length === 1 ? "" : "s"}:`);
  errors.forEach((error, index) => console.error(`${index + 1}. ${error}`));
  process.exit(1);
}

console.log(`Quiz validation passed. Checked ${quizzes.length} quizzes and ${questionCount} questions.`);
