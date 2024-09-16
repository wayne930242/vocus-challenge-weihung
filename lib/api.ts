import { Article, ArticleResponse } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://api-staging.vocus.cc";

export const fetchArticles = async (
  userId: string,
  num: number = 1
): Promise<Article[]> => {
  const response = await fetch(
    `${BASE_URL}/api/articles?userId=${userId}&num=${num}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const data: ArticleResponse = await response.json();
  return data?.articles ?? [];
};
