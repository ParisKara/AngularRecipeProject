export class Recipe {
  public id: number;
  public name: string;
  public category: string;
  public instructions: string;
  public image: string

  constructor(id: number, name: string, category: string, instructions: string, imgPath: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.instructions = instructions;
    this.image = imgPath;
  }
}
