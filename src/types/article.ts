export class Article {
  public id: string;
  public title: string;
  public author: string;
  public date: Date;

  constructor(
    title = "Title",
    id = crypto.randomUUID(),
    author = "dispenser",
    date = new Date(),
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.date = date;
  }
}
