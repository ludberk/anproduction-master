import { ProductModel } from "./model/product.model.js";



export class ProductDal {
  static async add(newUser) {
      return await ProductModel.create(newUser);
    
  }
  static async getFindById(id) {
    return await ProductModel.findById(id);
  }
  static async deleteById(id) {
    return await ProductModel.deleteOne({ _id: id });
  }
  static async getAll() {
    return await ProductModel.find({});
  }
  static async updateById(id, newProduct) {
    return await ProductModel.findByIdAndUpdate(
      id,
      { $set: newProduct },
      { new: true }
    );
  }
}
