import type { MetadataRoute } from "next";
import { categories, quizzes } from "@/data/quizzes";

const siteUrl = "https://accounting-made-simple-quiz.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/category/${category.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));
  const quizRoutes = quizzes.map((quiz) => ({
    url: `${siteUrl}/quiz/${quiz.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...categoryRoutes,
    ...quizRoutes
  ];
}
