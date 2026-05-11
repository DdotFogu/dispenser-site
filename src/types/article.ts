import plip from "../assets/pic/plip.jpg";
import ddot from "../assets/vids/ddotsong.mov";

export class ArticleClass {
  public id: string;
  public author: string;
  public date: Date;
  public content: Block[];

  constructor(
    content: Block[],
    author = "dispenser",
    date = new Date(),
    id: string = crypto.randomUUID(),
  ) {
    this.id = id;
    this.author = author;
    this.date = date;
    this.content = content;
  }

  blockOf(type: BlockType): Block | null {
    const filtered = this.content.filter((value, _) => value.type === type);
    return filtered.length > 0 ? filtered[0] : null;
  }
}

export const BlockType = {
  Text: 0,
  Video: 1,
  Img: 2,
  Url: 3,
  Subtitle: 4,
  Title: 5,
} as const;
export type BlockType = (typeof BlockType)[keyof typeof BlockType];

export class Block {
  type: BlockType;
  text: string;

  constructor(type: BlockType, text: string) {
    this.type = type;
    this.text = text;
  }
}

export const articles: ArticleClass[] = [
  new ArticleClass([
    new Block(BlockType.Title, "Lorem Ispum"),
    new Block(
      BlockType.Text,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ),
    new Block(BlockType.Subtitle, "Lorem Ispum"),
    new Block(BlockType.Img, plip),
    new Block(
      BlockType.Text,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ),
  ]),
  new ArticleClass([
    new Block(BlockType.Title, "de Finibus Bonorum et Malorum"),
    new Block(
      BlockType.Text,
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    ),
    new Block(BlockType.Subtitle, "de Finibus Bonorum et Malorum"),
    new Block(BlockType.Video, ddot),
    new Block(
      BlockType.Text,
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    ),
  ]),
];

export const welcome: ArticleClass = new ArticleClass(
  [
    new Block(BlockType.Title, "Welcome"),
    new Block(
      BlockType.Text,
      "To began reading, click on any of the article links provided.",
    ),
  ],
  "dispenser",
  new Date(2026, 4, 10),
);

export const about: ArticleClass = new ArticleClass(
  [
    new Block(BlockType.Title, "About"),
    new Block(
      BlockType.Text,
      "This is the about page containing information and details about this project.",
    ),
  ],
  "dispenser",
  new Date(2026, 4, 10),
);
