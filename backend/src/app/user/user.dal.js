import { UserModel } from "./model/user.model.js";


export class UserDal {
  static async add(newUser) {
      return await UserModel.create(newUser);
    
  }
  static async getFindById(id) {
    return await UserModel.findById(id);
  }
  static async getFindByUsername(userName){
    return await UserModel.findOne({userName});
  }
  static async deleteById(id) {
    return await UserModel.deleteOne({ _id: id });
  }
  static async getAll() {
    return await UserModel.find({});
  }
  static async updateById(id, newUser) {
    return await UserModel.findByIdAndUpdate(
      id,
      { $set: newUser },
      { new: true }
    );
  }
}
