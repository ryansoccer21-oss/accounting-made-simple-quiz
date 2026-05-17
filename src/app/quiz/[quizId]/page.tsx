import Link from "next/link";
import { notFound } from "next/navigation";
import QuizPlayer from "@/components/QuizPlayer";
import { getCategoryByName, getQuiz } from "@/lib/quiz-utils";

type QuizPageProps = {
  params: Promise<{
    quizId: string;
  }>;
};

export default async function QuizPage({ params }: QuizPageProps) {
  const { quizId } = await params;
  const quiz = getQuiz(quizId);

  if (!quiz) {
    notFound();
  }

  const category = getCategoryByName(quiz.category);

  if (!category || quiz.questions.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/category/${category.id}`}
          className="text-sm font-bold text-mint transition hover:text-navy"
        >
          Back to {category.name}
        </Link>
        <span className="rounded-full bg-calm px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
          {category.name}
        </span>
      </div>

      <QuizPlayer quiz={quiz} backToQuizListHref={`/category/${category.id}`} />
    </main>
  );
}
