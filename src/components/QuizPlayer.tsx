"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Quiz, QuizQuestion } from "@/data/quizzes";
import { getAnswerText } from "@/lib/quiz-utils";

type QuizPlayerProps = {
  quiz: Quiz;
  backToQuizListHref?: string;
};

const answerLetters = ["A", "B", "C", "D"] as const;

export default function QuizPlayer({ quiz, backToQuizListHref }: QuizPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<QuizQuestion["correctAnswer"] | null>(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const questions = quiz.questions;
  const currentQuestion = questions[currentIndex];
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const percentage = useMemo(() => Math.round((score / questions.length) * 100), [questions.length, score]);
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  const performanceMessage = useMemo(() => {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 75) return "Good work";
    if (percentage >= 60) return "Keep practicing";
    return "Review the topic again";
  }, [percentage]);

  function handleAnswer(answer: QuizQuestion["correctAnswer"]) {
    if (hasAnswered) {
      return;
    }

    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function handleNextQuestion() {
    if (currentIndex === questions.length - 1) {
      setIsComplete(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
  }

  function handleRetry() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsComplete(false);
  }

  if (isComplete) {
    return (
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-mint">Final score</p>
            <h1 className="mt-2 text-3xl font-bold text-ink">{quiz.title}</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-700">
              You completed this {quiz.category.toLowerCase()} quiz. Review your score below and retry whenever you are ready.
            </p>
          </div>
          <span className="rounded-full bg-calm px-4 py-2 text-sm font-bold text-navy">{quiz.difficulty}</span>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-calm p-4">
            <p className="text-sm font-bold text-slate-600">Score</p>
            <p className="mt-2 text-3xl font-bold text-navy">
              {score}/{questions.length}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-600">Percentage</p>
            <p className="mt-2 text-3xl font-bold text-navy">{percentage}%</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-600">Message</p>
            <p className="mt-2 text-xl font-bold text-navy">{performanceMessage}</p>
          </div>
        </div>

        <div className="mt-7 rounded-lg border border-slate-200 bg-calm p-5">
          <p className="text-sm font-bold uppercase tracking-wide text-mint">Tutoring next step</p>
          <h2 className="mt-2 text-xl font-bold text-ink">Want help with the questions you missed?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Accounting Made Simple can walk through the topic step by step so the rules, formulas, and examples feel easier to use.
          </p>
          <Link
            href="/#tutoring"
            className="mt-4 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-ink"
          >
            View Tutoring Next Step
          </Link>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleRetry}
            className="rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-ink"
          >
            Retry Quiz
          </button>
          {backToQuizListHref ? (
            <Link
              href={backToQuizListHref}
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-mint hover:text-navy"
            >
              Back to Quiz List
            </Link>
          ) : null}
          <Link
            href="/#categories"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-mint hover:text-navy"
          >
            Back to Categories
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-mint">{quiz.topic}</p>
          <h1 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{quiz.title}</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{quiz.description}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-calm px-4 py-3 text-right">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Score</p>
          <p className="text-lg font-bold text-navy">
            {score}/{questions.length}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between gap-4 text-sm font-bold text-slate-600">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>{quiz.difficulty}</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-mint transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Question {currentIndex + 1}</p>
        <p className="mt-2 text-xl font-semibold leading-8 text-ink">{currentQuestion.question}</p>
      </div>

      <div className="mt-6 grid gap-3">
        {currentQuestion.choices.map((choice, index) => {
          const letter = answerLetters[index];
          const isSelected = selectedAnswer === letter;
          const isCorrectChoice = currentQuestion.correctAnswer === letter;
          const answeredStyle = isCorrectChoice
            ? "border-mint bg-calm text-navy"
            : isSelected
              ? "border-red-300 bg-red-50 text-red-900"
              : "border-slate-200 bg-white text-slate-700";

          return (
            <button
              key={`${currentQuestion.id}-${letter}`}
              type="button"
              onClick={() => handleAnswer(letter)}
              disabled={hasAnswered}
              className={`flex min-h-16 items-start gap-3 rounded-lg border p-4 text-left transition ${
                hasAnswered ? answeredStyle : "border-slate-200 bg-white text-slate-700 hover:border-mint hover:bg-calm"
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-navy text-sm font-bold text-white">
                {letter}
              </span>
              <span className="pt-1 text-sm font-semibold leading-6 sm:text-base">{choice}</span>
            </button>
          );
        })}
      </div>

      {hasAnswered ? (
        <div
          className={`mt-6 rounded-lg border p-5 ${
            isCorrect ? "border-mint bg-calm" : "border-red-200 bg-red-50"
          }`}
        >
          <p className={`text-base font-bold ${isCorrect ? "text-navy" : "text-red-900"}`}>
            {isCorrect ? "Correct" : "Incorrect"}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Correct answer: {currentQuestion.correctAnswer}.{" "}
            {getAnswerText(currentQuestion.choices, currentQuestion.correctAnswer)}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{currentQuestion.explanation}</p>
          <button
            type="button"
            onClick={handleNextQuestion}
            className="mt-5 rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink"
          >
            {currentIndex === questions.length - 1 ? "See Final Score" : "Next Question"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
