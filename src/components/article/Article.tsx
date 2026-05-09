import { ArticleClass, BlockType } from "../../types/article.ts";

type ArticleProps = {
  article: ArticleClass;
};

const Article = ({ article }: ArticleProps) => {
  console.log(article);
  return (
    <div className="flex flex-col gap-5 max-h-full overflow-y-auto custom-scrollbar pr-2">
      {article.content.map((value, idx) => {
        switch (value.type) {
          case BlockType.Text:
            return <Text key={idx} text={value.text} />;
          case BlockType.Video:
            return <Video key={idx} src={value.text} />;
          case BlockType.Img:
            return <BlockImg key={idx} src={value.text} />;
          case BlockType.Url:
            return <Url key={idx} link={value.text} />;
          case BlockType.Subtitle:
            return <SubTitle key={idx} text={value.text} />;
          case BlockType.Title:
            return (
              <Title
                key={idx}
                text={value.text}
                author={article.author}
                date={article.date}
              />
            );
          default:
            return null;
        }
      })}
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
    <h1 className="text-text-primary text-2xl font-bold w-full flex flex-col sm:flex-row">
      {text}
      <span className="text-subtle font-normal sm:ml-auto text-sm">
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

type SubTitleProps = {
  text: string;
};

const SubTitle = ({ text }: SubTitleProps) => {
  return <h1 className="text-text-primary text-lg font-bold">{text}</h1>;
};

type TextProps = {
  text: string;
};

const Text = ({ text }: TextProps) => {
  return <p className="text-text-secondary">{text}</p>;
};

type ImgProps = {
  src?: string;
};

const BlockImg = ({ src }: ImgProps) => {
  return <img className="w-fit h-fit" src={src ? src : ""} />;
};

type UrlProps = {
  link: string;
};

const Url = ({ link }: UrlProps) => {
  return (
    <a
      className="text-subtle hover:text-accent-active transition-colors duration-200 w-fit"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {link}
    </a>
  );
};

type VideoProps = {
  src?: string;
};

const Video = ({ src }: VideoProps) => {
  return (
    <video className="w-full object-cover" controls playsInline src={src}>
      Your browser does not support the video tag.
    </video>
  );
};
