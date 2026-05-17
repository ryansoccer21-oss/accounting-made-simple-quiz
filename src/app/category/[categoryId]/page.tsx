import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getQuizzesByCategory } from "@/lib/quiz-utils";

type CategoryPageProps = {
  params: Promise<{
    categoryId: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;
  const category = getCategory(categoryId);

  if (!category) {
    notFound();
  }

  const quizzes = getQuizzesByCategory(categoryId);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/#categories" className="text-sm font-bold text-mint transition hover:text-navy">
        Back to all categories
      </Link>

      <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-mint">Quiz list</p>
            <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">{category.name}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-700">{category.description}</p>
          </div>
          <div className="rounded-md bg-calm px-4 py-3 text-sm font-bold text-navy">
            {quizzes.length} focused quizzes
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {quizzes.map((quiz) => {
          const questionCount = quiz.questions.length;

          return (
            <article key={quiz.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-mint hover:shadow-soft">
              <div className="flex min-h-40 flex-col">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-bold text-navy">{quiz.title}</h2>
                    <span className="rounded-full bg-calm px-3 py-1 text-xs font-bold text-navy">{quiz.difficulty}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{quiz.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-md border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                      {questionCount} questions
                    </span>
                    <span className="rounded-md border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                      {quiz.topic}
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <Link
                    href={`/quiz/${quiz.id}`}
                    className="inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink"
                  >
                    Start Quiz
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
