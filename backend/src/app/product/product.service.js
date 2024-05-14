import { APIError } from "../../shared/error-response/error-response.js";
import { ProductDal } from "./product.dal.js";


export class ProductService {
  static async add(newProduct) {
    
    return await ProductDal.add(newProduct);
  }

  static async getFindById(id) {
    const data = await ProductDal.getFindById(id).catch(
      (err) => {
        //console.log(err);
        console.log("get find by id error 'ProductService.js ");
      }
    );
    if (!data) throw new APIError("Product Not Found !", 404);
    return data;
  }

  static async getAll() {
    const data = await ProductDal.getAll().catch((err) => {
      console.log(err);
    });
    return data;
  }

  static async deleteById(id) {
    const findData = await ProductService.getFindById(id);
    return await ProductDal.deleteById(findData._id);
  }

  static async updateById(id, newUser) {
    const findData = await ProductService.getFindById(id);

    const updatedData = await ProductDal.updateById(
      findData._id,
      newUser
    );

    return updatedData;
  }
}
