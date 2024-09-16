import { useQuery } from "@tanstack/react-query";

import { fetchArticles } from "@/lib/api";
import { Article } from "@/types";

const USER_ID = "601aa114fd89780001d24d4d";
const NUM_ARTICLES = 20;

export const useArticles = () => {
  return useQuery<Article[], Error>({
    queryKey: ["articles", USER_ID],
    queryFn: () => fetchArticles(USER_ID, NUM_ARTICLES),
  });
};
