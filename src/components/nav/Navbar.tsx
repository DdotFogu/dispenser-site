import { Link } from "react-router";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
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
          <NavbarButton title="Home" />
          <NavbarButton title="About" to="/about" />
        </div>
      </span>
    </>
  );
};

type ButtonProps = {
  title: string;
  to?: string;
};

const NavbarButton = ({ title, to = "/" }: ButtonProps) => {
  return (
    <Link to={to}>
      <span
        className="
        text-subtle font-semibold 
        transition-colors duration-200 hover:text-text-primary active:text-accent-active
        "
      >
        {title}
      </span>
    </Link>
  );
};

export default Navbar;
