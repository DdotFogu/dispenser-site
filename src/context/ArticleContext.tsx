import React, { useContext, useState } from "react";
import { ArticleClass, welcome, articles } from "../types/article.ts";

const ArticleContext = React.createContext<{
  all: ArticleClass[];
  current: undefined | ArticleClass;
}>({
  all: [],
  current: undefined,
});

const ArticleUpdateContext = React.createContext<{
  selectArticle: (id: string | ArticleClass) => void;
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
  const [all] = useState<ArticleClass[]>([...articles]);

  const [current, setCurrent] = useState<ArticleClass>(welcome);

  const selectArticle = (article: string | ArticleClass) => {
    if (typeof article === "string") {
      const found = all.find((item) => item.id === article);
      if (found) {
        setCurrent(found);
      }
    } else {
      setCurrent(article);
    }
  };

  return (
    <ArticleContext.Provider value={{ all, current }}>
      <ArticleUpdateContext.Provider value={{ selectArticle }}>
        {children}
      </ArticleUpdateContext.Provider>
    </ArticleContext.Provider>
  );
};
