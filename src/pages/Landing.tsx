import { useArticles, useArticlesUpdate } from "../context/ArticleContext.tsx";
import { BlockType } from "../types/article.ts";

import Navbar from "../components/nav/Navbar.tsx";
import ArticleLink from "../components/nav/ArticleLink.tsx";
import Article from "../components/article/Article.tsx";

const Landing = () => {
  const { articles, current } = useArticles();
  const { selectArticle } = useArticlesUpdate();

  return (
    <>
      <div className="w-[60vw] p-5 h-full flex flex-col items-center mx-auto pt-[10vh] bg-base">
        <Navbar />
        <div className="flex flex-row w-full mt-5 overflow-y-hidden">
          <span className="flex flex-col items-start w-[15%] mr-[10%] gap-3 overflow-x-hidden overflow-y-auto custom-scrollbar">
            {articles.map((article) => {
              const titleBlock = article.blockOf(BlockType.Title);

              return (
                <ArticleLink
                  key={article.id}
                  title={titleBlock ? titleBlock.text : "Article Title"}
                  onClick={() => selectArticle(article.id)}
                />
              );
            })}
          </span>

          <span className="w-full">
            {current && <Article article={current} />}
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
