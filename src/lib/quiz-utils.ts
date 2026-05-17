import { categories, quizzes } from "@/data/quizzes";

export function getCategory(categoryId: string) {
  return categories.find((category) => category.id === categoryId);
}

export function getCategoryByName(categoryName: string) {
  return categories.find((category) => category.name === categoryName);
}

export function getQuiz(quizId: string) {
  return quizzes.find((quiz) => quiz.id === quizId);
}

export function getQuizzesByCategory(categoryId: string) {
  const category = getCategory(categoryId);

  if (!category) {
    return [];
  }

  return quizzes.filter((quiz) => quiz.category === category.name);
}

export function getAnswerText(choices: [string, string, string, string], answer: "A" | "B" | "C" | "D") {
  const answerIndex = answer.charCodeAt(0) - 65;
  return choices[answerIndex] ?? "";
}
