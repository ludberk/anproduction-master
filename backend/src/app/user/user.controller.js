import { createTokenByUser } from "../../core/authorization/crypy.js";
import { comparePassword, createPassword } from "../../core/authorization/passwordMangment.js";
import { ApiResponse } from "../../shared/api-response/api-response.js";
import { APIError } from "../../shared/error-response/error-response.js";

import { UserDto } from "./dto/user.dto.js";
import { UserService } from "./user.service.js";

export class UserController {

  static async resetPassword(request, response) {
    const { oldpassword, newpassword } = request.body;
    let user = await UserService.getFindById(request.user._id);
    await comparePassword(oldpassword, user.password);
    user.password = await createPassword(newpassword);
    user = await UserService.updateById(user._id, user);
    return new ApiResponse(
      new UserDto(user)
    ).success(response);
  }

  static async add(request, response) {
    let body = request.body;
    let havauser = await UserService.getAll();

    if(havauser&&havauser.length>0){
      throw new APIError("have User",403);
    }


    body.password = await createPassword(body.password);
    const data = await UserService.add(body);

    return new ApiResponse(
      new UserDto(data),
      "User created success"
    ).created(response);
  }

  static async login(request, response) {
    const { userName, password } = request.body;
    const user = await UserService.getFindByUsername(userName);

    await comparePassword(password, user.password);
    const accessToken = await createTokenByUser(user);

    response.cookie("authToken", accessToken, {
      expires: new Date(Date.now() + 48 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });

    let dto = new UserDto(user);
    dto.password = "";
    return new ApiResponse(
      dto
    ).success(response);


  }

  static async logout(request, response) {
    response.clearCookie("authToken");
    return new ApiResponse(
      null,
      "Logout successful"
    ).success(response);
  }




  static async getFindById(request, response) {
    const data = await UserService.getFindById(
      request.params.id
    );
    return new ApiResponse(
      new UserDto(data),
      "User find success"
    ).success(response);
  }

  static async getAll(request, response) {
    const data = await UserService.getAll();
    return new ApiResponse(
      data.map((e) => new UserDto(e)),
      "User list success"
    ).success(response);
  }

  static async deleteById(request, response) {
    await UserService.deleteById(request.params.id);
    return new ApiResponse(
      null,
      "User deleted success"
    ).success(response);
  }
  // static async updateById(request, response) {
  //   let body = request.body;
  //   body.password = await createPassword(body.password);

  //   let updateData = await UserService.updateById(
  //     request.params.id,
  //     body
  //   );
  //   return new ApiResponse(
  //     new UserDto(updateData),
  //     "User Update success"
  //   ).success(response);
  // }
}
