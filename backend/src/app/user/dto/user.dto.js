export class UserDto {
    constructor(model) {
      this.id = model._id;
      this.userName = model.userName;
      this.password = model.password;
      this.isBlocked = model.isBlocked;
    }
  }
  