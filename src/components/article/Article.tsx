type ArticleProps = {
  title: string;
  author: string;
  date: Date;
};

const Article = ({ title, author, date }: ArticleProps) => {
  console.log(author);
  return (
    <div>
      <Title text={title} author={author} date={date} />
    </div>
  );
};

export default Article;

type TitleProps = {
  text: string;
  date: Date;
  author: string;
};

const Title = ({ text, author, date }: TitleProps) => {
  return (
    <h1 className="text-text-primary font-bold w-full flex flex-col sm:flex-row">
      {text}
      <span className="text-subtle font-normal sm:ml-auto">
        {author}
        {" • "}
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </h1>
  );
};
