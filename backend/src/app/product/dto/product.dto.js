export class ProductDto {
    constructor(model) {
      this.id = model._id;
      this.text = model.text;
      this.furniture = model.furniture;
      this.ironWork = model.ironWork;
      this.images = model.images;
    }
  }
  