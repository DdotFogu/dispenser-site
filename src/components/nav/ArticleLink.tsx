type LinkProps = {
  title: string;
  onClick?: () => void;
};

const ArticleLink = ({ title, onClick }: LinkProps) => {
  return (
    <button
      onClick={onClick}
      className="
        text-subtle font-light 
        transition-colors duration-200 hover:text-text-primary
        cursor-pointer
      "
    >
      {title}
    </button>
  );
};

export default ArticleLink;
