import { CategoryModel } from "./model/category.model.js";



export class CategoryDal {
  static async add(newCategory) {
      return await CategoryModel.create(newCategory);
    
  }
  static async getFindById(id) {
    return await CategoryModel.findById(id);
  }
  static async deleteById(id) {
    return await CategoryModel.deleteOne({ _id: id });
  }
  static async getAll() {
    return await CategoryModel.find({});
  }
  static async updateById(id, newCategory) {
    return await CategoryModel.findByIdAndUpdate(
      id,
      { $set: newCategory },
      { new: true }
    );
  }
}
