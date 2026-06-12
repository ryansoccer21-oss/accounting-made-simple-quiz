import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://accounting-made-simple-quiz.vercel.app";
const siteDescription =
  "Free accounting, Excel, bookkeeping, and personal finance quizzes with instant feedback and short explanations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Accounting Made Simple Quiz Center",
    template: "%s | Accounting Made Simple Quiz Center"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Accounting Made Simple Quiz Center",
    description: siteDescription,
    url: siteUrl,
    siteName: "Accounting Made Simple Quiz Center",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary",
    title: "Accounting Made Simple Quiz Center",
    description: siteDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 text-base font-bold tracking-normal text-navy">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-sm font-bold text-white">
                AMS
              </span>
              <span>Accounting Made Simple</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/#categories"
                className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-mint hover:text-navy"
              >
                Quizzes
              </Link>
              <Link
                href="/#tutoring"
                className="hidden rounded-md bg-navy px-3 py-2 text-sm font-semibold text-white transition hover:bg-ink sm:inline-flex"
              >
                Tutoring Help
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="font-semibold text-navy">Accounting Made Simple</p>
            <p>Affordable accounting, Excel, and finance tutoring made simple.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
