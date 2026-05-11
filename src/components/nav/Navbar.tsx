import { Link } from "react-router";
import { welcome, about } from "../../types/article.ts";
import { useArticlesUpdate } from "../../context/ArticleContext.tsx";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const { selectArticle } = useArticlesUpdate();

  return (
    <>
      <span
        className="
        w-full h-fit
        flex flex-col
        sm:flex-row
        "
      >
        <h1 className="text-text-primary font-bold">
          <span className="text-accent">Dispenser</span> Articles
        </h1>

        <div
          className="
          w-fit h-fit sm:ml-auto
          flex flex-row gap-5
          "
        >
          <NavbarButton title="Home" onClick={() => selectArticle(welcome)} />
          <NavbarButton title="About" onClick={() => selectArticle(about)} />
        </div>
      </span>
    </>
  );
};

type ButtonProps = {
  title: string;
  to?: string;
  onClick?: () => void;
};

const NavbarButton = ({ title, to = "/", onClick }: ButtonProps) => {
  return (
    <Link to={to}>
      <span
        className="
        text-subtle font-semibold 
        transition-colors duration-200 hover:text-text-primary active:text-accent-active
        "
        onClick={() => (onClick ? onClick() : undefined)}
      >
        {title}
      </span>
    </Link>
  );
};

export default Navbar;
