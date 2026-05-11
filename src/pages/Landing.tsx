import { useArticles, useArticlesUpdate } from "../context/ArticleContext.tsx";
import { BlockType } from "../types/article.ts";
import { truncate } from "../utils/stringutils.ts";

import Navbar from "../components/nav/Navbar.tsx";
import ArticleLink from "../components/nav/ArticleLink.tsx";
import Article from "../components/article/Article.tsx";

const Landing = () => {
  const { all, current } = useArticles();
  const { selectArticle } = useArticlesUpdate();

  return (
    <>
      <div className="w-full max-w-full xl:max-w-[60vw] p-5 h-auto min-h-screen xl:h-full flex flex-col items-center mx-auto pt-[10vh] bg-base">
        <Navbar />
        <div className="flex flex-col xl:flex-row w-full mt-5 min-h-0">
          <span className="flex flex-row flex-wrap items-start w-full xl:flex-col xl:w-[15%] mr-0 xl:mr-[5%] mb-5 xl:mb-0 gap-3 xl:gap-1 max-h-[22vh] xl:max-h-none overflow-y-hidden xl:overflow-visible overflow-x-auto custom-scrollbar">
            {all.map((article) => {
              const titleBlock = article.blockOf(BlockType.Title);

              return (
                <ArticleLink
                  key={article.id}
                  title={truncate(
                    titleBlock ? titleBlock.text : "Article Title",
                    25,
                  )}
                  onClick={() => selectArticle(article.id)}
                />
              );
            })}
          </span>

          <span className="w-full min-h-0">
            {current && <Article article={current} />}
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
