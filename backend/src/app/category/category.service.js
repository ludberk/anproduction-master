import { APIError } from "../../shared/error-response/error-response.js";
import { CategoryDal } from "./category.dal.js";


export class CategoryService {
  static async add(newCategory) {
    
    return await CategoryDal.add(newCategory);
  }

  static async getFindById(id) {
    const data = await CategoryDal.getFindById(id).catch(
      (err) => {
        //console.log(err);
        console.log("get find by id error 'CategorySerivce.js ");
      }
    );
    if (!data) throw new APIError("Category Not Found !", 404);
    return data;
  }

  static async getAll() {
    const data = await CategoryDal.getAll().catch((err) => {
      console.log(err);
    });
    return data;
  }

  static async deleteById(id) {
    const findData = await CategoryService.getFindById(id);
    return await CategoryDal.deleteById(findData._id);
  }

  static async updateById(id, newCategory) {
    const findData = await CategoryService.getFindById(id);

    const updatedData = await CategoryDal.updateById(
      findData._id,
      newCategory
    );

    return updatedData;
  }
}
