import React, { useContext, useState } from "react";
import { ArticleClass, Block, BlockType } from "../types/article.ts";

import plip from "../assets/pic/plip.jpg";
import ddot from "../assets/vids/ddotsong.mov";

const ArticleContext = React.createContext<{
  articles: ArticleClass[];
  current: undefined | ArticleClass;
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
  const [articles] = useState<ArticleClass[]>([
    new ArticleClass([
      new Block(BlockType.Title, "Lorem Ispum"),
      new Block(
        BlockType.Text,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ),
      new Block(BlockType.Img, plip),
      new Block(BlockType.Url, "https://github.com/DdotFogu"),
      new Block(BlockType.Subtitle, "Ddot FMB?"),
      new Block(
        BlockType.Text,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ),
      new Block(BlockType.Subtitle, "Nails is so gay"),
      new Block(
        BlockType.Text,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ),
      new Block(BlockType.Video, ddot),
    ]),
  ]);

  const [current, setCurrent] = useState<ArticleClass>();

  const selectArticle = (id: string) => {
    const article = articles.find((item) => item.id === id);
    if (article) {
      setCurrent(article);
    }
  };

  return (
    <ArticleContext.Provider value={{ articles, current }}>
      <ArticleUpdateContext.Provider value={{ selectArticle }}>
        {children}
      </ArticleUpdateContext.Provider>
    </ArticleContext.Provider>
  );
};
