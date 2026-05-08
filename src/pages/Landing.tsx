import Navbar from "../components/nav/Navbar.tsx";
import ArticleLink from "../components/nav/ArticleLink.tsx";

const Landing = () => {
  return (
    <>
      <div
        className="
        w-[60vw] h-fit
        flex flex-col items-center mx-auto pt-[10vh]
        "
      >
        <Navbar />
        <span className="flex flex-col mr-auto mt-5">
          <h1 className="text-subtle font-semibold">reading:</h1>
          <ArticleLink title="Loruem Ispum" />
        </span>
      </div>
    </>
  );
};

export default Landing;
