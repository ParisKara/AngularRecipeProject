export class Recipe {
  public name: string;
  public category: string;
  public instructions: string;
  public image: string

  constructor(name: string, category: string, instructions: string, imgPath: string) {
    this.name = name;
    this.category = category;
    this.instructions = instructions;
    this.image = imgPath;
  }
}
