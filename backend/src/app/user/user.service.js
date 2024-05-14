import { APIError } from "../../shared/error-response/error-response.js";
import { UserDal } from "./user.dal.js";

export class UserService {
  static async add(newUser) {
    let data  = await UserDal.getFindByUsername(newUser.userName);
    if(data)
        throw new APIError("Duplicate username error",409);
    
    return await UserDal.add(newUser);
  }

  static async getFindById(id) {
    const data = await UserDal.getFindById(id).catch(
      (err) => {
        //console.log(err);
        console.log("get find by id error 'UserService.js ");
      }
    );
    if (!data) throw new APIError("User Not Found !", 404);
    return data;
  }

  static async getFindByUsername(userName){
    const data = await UserDal.getFindByUsername(userName).catch(
        (err)=>{
            console.log("get find by username error");
        }
    );
    if (!data) throw new APIError("User Not Found !", 404);
    return data;
  }

  static async getAll() {
    const data = await UserDal.getAll().catch((err) => {
      console.log(err);
    });
    return data;
  }

  static async deleteById(id) {
    const findData = await UserService.getFindById(id);
    return await UserDal.deleteById(findData._id);
  }

  static async updateById(id, newUser) {
    const findData = await UserService.getFindById(id);

    const updatedData = await UserDal.updateById(
      findData._id,
      newUser
    );

    return updatedData;
  }
}
