import { useArticles, useArticlesUpdate } from "../context/ArticleContext.tsx";

import Navbar from "../components/nav/Navbar.tsx";
import ArticleLink from "../components/nav/ArticleLink.tsx";
import Article from "../components/article/Article.tsx";

const Landing = () => {
  const { articles, current } = useArticles();
  const { selectArticle } = useArticlesUpdate();

  return (
    <>
      <div className="w-[60vw] h-fit flex flex-col items-center mx-auto pt-[10vh]">
        <Navbar />
        <div className="flex flex-row w-full mt-5">
          <span className="flex flex-col items-start w-[15%] mr-[10%] overflow-x-hidden">
            {articles.map((article) => {
              return (
                <ArticleLink
                  key={article.id}
                  title={article.title}
                  onClick={() => selectArticle(article.id)}
                />
              );
            })}
          </span>

          <span className="w-full">
            {current && (
              <Article
                title={current.title}
                author={current.author}
                date={current.date}
              />
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
