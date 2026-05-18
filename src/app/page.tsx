import Link from "next/link";
import { categories, quizzes } from "@/data/quizzes";

const totalQuestions = quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0);
const mainWebsiteUrl = "https://accounting-made-simple.vercel.app";
const bookingUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RoutP_89pDYhgCMsRfwtFvKuJOYNFjswxPCn4wQ0Difq4JjPeJTgTGbC3zr06wktNsCeti3rt";

const services = [
  "Financial Accounting",
  "Managerial Accounting",
  "Intermediate Accounting",
  "Advanced Accounting",
  "Cost Accounting",
  "Excel Help",
  "QuickBooks / Bookkeeping Basics",
  "Personal Finance Basics"
];

const pricing = [
  "First session is free",
  "30 minutes: $15",
  "60 minutes: $25",
  "90 minutes: $40",
  "5-session pack: five 60-minute sessions for $100"
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.78fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-mint">Student practice center</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-ink sm:text-5xl">
            Accounting Made Simple
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Affordable accounting, Excel, and finance tutoring made simple for students and beginners.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-700">
            Use these premade quizzes to practice core skills, get quick feedback, and review short explanations before your next class, test, or tutoring session.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/category/financial-accounting"
              className="rounded-md bg-navy px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            >
              Start a Quiz
            </Link>
            <a
              href="#categories"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-mint hover:text-navy"
            >
              Browse Categories
            </a>
            <a
              href={mainWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-mint hover:text-navy"
            >
              Visit Main Website
            </a>
          </div>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {["Beginner-friendly", "Step-by-step", "No sign-in needed"].map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white/80 px-3 py-3 text-sm font-bold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
          <div className="border-b border-slate-200 pb-5">
            <p className="text-sm font-bold uppercase tracking-wide text-mint">Practice snapshot</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">Quiz before the tutoring session.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Students can warm up with focused questions, see what they missed, and come prepared with better questions.
            </p>
          </div>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold text-slate-700">Categories</p>
              <p className="text-2xl font-bold text-navy">{categories.length}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold text-slate-700">Premade quizzes</p>
              <p className="text-2xl font-bold text-navy">{quizzes.length}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold text-slate-700">Sample questions</p>
              <p className="text-2xl font-bold text-navy">{totalQuestions}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wide text-mint">Quiz categories</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">Choose what you want to practice</h2>
              <p className="mt-2 text-slate-700">Pick a topic area and start with a short, focused quiz.</p>
            </div>
            <p className="rounded-md bg-calm px-4 py-3 text-sm font-bold text-navy">
              {quizzes.length} premade quizzes
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const quizCount = quizzes.filter((quiz) => quiz.category === category.name).length;

              return (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-mint hover:shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-navy">{category.name}</h3>
                    <span className="rounded-full bg-calm px-3 py-1 text-xs font-bold text-navy">
                      {quizCount} quizzes
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                  <span className="mt-4 inline-flex text-sm font-bold text-mint group-hover:text-navy">
                    View quizzes
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tutoring" className="bg-calm">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-mint">Tutoring support</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">
                Need help understanding the material? Book a tutoring session with Accounting Made Simple.
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                Sessions are beginner-friendly, affordable, and focused on helping students understand each topic step by step.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-ink"
              >
                Book a Free First Session
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">Tutoring Services</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span key={service} className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">Pricing</h3>
                <div className="mt-4 space-y-3">
                  {pricing.map((item) => (
                    <div key={item} className="border-b border-slate-100 pb-3 text-sm font-semibold text-slate-700 last:border-b-0 last:pb-0">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
