import { FC, useEffect, useMemo } from "react";
import { Article } from "@/types";
import { useArticles } from "@/hooks/useArticles";
import { ArticleItem } from "./ArticleItem";
import { DotLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export const ArticlesList: FC<Props> = ({ initialArticles }) => {
  const { data, error } = useArticles(initialArticles);

  const shuffledArticles = useMemo(() => {
    if (!data) return [];
    return data.sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast({
        title: "下載文章列表失敗",
        description: "無法下載文章列表，請稍後再試。",
        variant: "destructive",
      });
    }
  }, [error]);

  return shuffledArticles ? (
    <div
      className={cn("grid my-12 py-8 px-2 grid-cols-1 gap-x-4", {
        "md:grid-cols-2": shuffledArticles.length > 1,
      })}
    >
      {shuffledArticles.map((article, index) => (
        <div
          key={article._id}
          className={cn("py-2", {
            "border-b md:border-b-0": index !== shuffledArticles.length - 1,
          })}
        >
          <ArticleItem
            title={article.title}
            abstract={article.abstract}
            thumbnailUrl={article.thumbnailUrl}
            likeCount={article.likeCount}
            userFullname={article.user.fullname}
            userAvatarUrl={article.user.avatarUrl}
          />
        </div>
      ))}
      {shuffledArticles.length === 0 && (
        <div className="flex justify-center items-center h-96 w-full">
          <p className="text-center text-4xl text-muted-foreground w-full font-bold">
            暫無文章
          </p>
        </div>
      )}
    </div>
  ) : (
    <div className="flex justify-center items-center h-96">
      <DotLoader color="#444" size={50} />
    </div>
  );
};

interface Props {
  initialArticles: Article[];
}
