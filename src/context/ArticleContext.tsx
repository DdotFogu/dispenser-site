import React, { useContext, useState } from "react";
import { Article } from "../types/article.ts";

const ArticleContext = React.createContext<{
  articles: Article[];
  current: undefined | Article;
}>({
  articles: [],
  current: undefined,
});

const ArticleUpdateContext = React.createContext<{
  selectArticle: (id: string) => void;
}>({ selectArticle: () => {} });

export function useArticles() {
  return useContext(ArticleContext);
}

export function useArticlesUpdate() {
  return useContext(ArticleUpdateContext);
}

export const ArticleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [articles, setArticles] = useState<Article[]>([
    new Article("Article One"),
    new Article("Article Two"),
  ]);

  const [current, setCurrent] = useState<Article>();

  const selectArticle = (id: string) => {
    const article = articles.find((item) => item.id === id);
    if (article) {
      setCurrent(article);
    }
    console.log(article);
  };

  return (
    <ArticleContext.Provider value={{ articles, current }}>
      <ArticleUpdateContext.Provider value={{ selectArticle }}>
        {children}
      </ArticleUpdateContext.Provider>
    </ArticleContext.Provider>
  );
};
