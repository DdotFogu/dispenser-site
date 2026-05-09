export class ArticleClass {
  public id: string;
  public author: string;
  public date: Date;
  public content: Block[];

  constructor(
    content: Block[],
    id = crypto.randomUUID(),
    author = "dispenser",
    date = new Date(),
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
