# Accounting Made Simple Quiz Center

Accounting Made Simple Quiz Center is a beginner-friendly quiz web app for tutoring students who are practicing accounting, Excel, QuickBooks/bookkeeping basics, and personal finance topics.

The app is built as a premade quiz MVP. It does not include AI quiz generation, login, payments, a database, student accounts, or booking software yet.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- Local TypeScript quiz data in `src/data/quizzes.ts`

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Project Checks

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Quiz Data Structure

All premade quiz content lives in:

```bash
src/data/quizzes.ts
```

Each quiz uses this reusable structure, which is also intended to work later for AI-generated quizzes:

```ts
{
  id: "accounting-equation-basics",
  title: "Accounting Equation Basics",
  category: "Financial Accounting",
  topic: "Accounting Equation Basics",
  description: "Practice assets, liabilities, equity, and how transactions affect the accounting equation.",
  difficulty: "Beginner",
  questions: [
    {
      id: "ae-001",
      question: "What is the basic accounting equation?",
      choices: [
        "Assets = Liabilities + Equity",
        "Assets = Revenue - Expenses",
        "Liabilities = Assets + Equity",
        "Equity = Revenue + Cash"
      ],
      correctAnswer: "A",
      explanation: "The basic accounting equation is Assets = Liabilities + Equity."
    }
  ]
}
```

Each question must have exactly four answer choices. The `correctAnswer` value must be `"A"`, `"B"`, `"C"`, or `"D"`.

## Add Quiz Questions

To add a question to an existing quiz:

1. Open `src/data/quizzes.ts`.
2. Find the quiz in the `quizzes` array.
3. Add a new object inside that quiz's `questions` array.
4. Give the question a unique `id` within that quiz.
5. Keep `choices` as exactly four answers in A/B/C/D order.

## Add A New Quiz

To add a new quiz:

1. Open `src/data/quizzes.ts`.
2. Add a new object to the `quizzes` array.
3. Include all required quiz fields:
   - `id`
   - `title`
   - `category`
   - `topic`
   - `description`
   - `difficulty`
   - `questions`
4. Make sure `category` exactly matches one of the category names in the `categories` array.

## Add A New Category

To add a new category:

1. Open `src/data/quizzes.ts`.
2. Add a new object to the `categories` array.
3. Include:
   - `id`
   - `name`
   - `description`
4. Use the same `name` value as the `category` value for any quizzes that belong to it.

## Deploy To Vercel

This project is ready for Vercel deployment as a standard Next.js app.

Typical deployment flow:

1. Push the project to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Deploy.

No environment variables are required for the current MVP.

## Known Local Environment Issue

In the Codex local environment used while building this project, command execution may fail with:

```text
CreateProcessAsUserW failed: 5
```

That message is an environment execution issue with the local command runner. It is not a confirmed app error. If you see it in Codex, try running `npm install`, `npm run lint`, and `npm run build` directly in your normal terminal.
