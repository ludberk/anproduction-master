export class CategoryDto {
    constructor(model) {
      this.id = model._id;
      this.title = model.title;
      this.text = model.text;
      this.furniture = model.furniture;
      this.ironWork = model.ironWork;
      this.image = model.image;
    }
  }
  