import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, DehydratedState, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchArticles } from "@/lib/api";
import Layout from "@/components/Layout";
import { Article } from "@/types";
import { ArticlesList } from "@/components/ArticleList";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

interface ArticlesPageProps {
  firstArticle: Article;
  selectedArticles: Article[];
  dehydratedState: DehydratedState;
}

const USER_ID = "601aa114fd89780001d24d4d";
const NUM_ARTICLES = 20;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["articles", USER_ID],
    queryFn: () => fetchArticles(USER_ID, NUM_ARTICLES),
  });
  const articles = queryClient.getQueryData<Article[]>(["articles", USER_ID]) || [];
  const firstArticle = articles[0] || {};
  const shuffled = articles.sort(() => 0.5 - Math.random());
  const selectedArticles = shuffled.slice(0, 4);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      firstArticle,
      selectedArticles,
    },
  };
};

const ArticlesPage: NextPage<ArticlesPageProps> = ({ firstArticle, dehydratedState, selectedArticles }) => {
  return (
    <Layout>
      <Head>
        <title>{firstArticle.title}</title>
        <meta name="canonical" content={`${BASE_URL}`} />
        <meta name="description" content={firstArticle.abstract} />
        <meta property="og:title" content={firstArticle.title} />
        <meta property="og:description" content={firstArticle.abstract} />
        <meta property="og:image" content={firstArticle.thumbnailUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BASE_URL}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={firstArticle.title} />
        <meta name="twitter:description" content={firstArticle.abstract} />
        <meta name="twitter:image" content={firstArticle.thumbnailUrl} />
      </Head>
      <main id="main">
        <HydrationBoundary state={dehydratedState}>
          <ArticlesList initArticles={selectedArticles} />
        </HydrationBoundary>
      </main>
    </Layout>
  );
};

export default ArticlesPage;