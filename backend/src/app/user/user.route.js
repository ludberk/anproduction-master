import express from "express";
import { UserController } from "./user.controller.js";
import { userSchemaMiddleware } from "./validation/user.middleware.js";
import { authMiddleware } from "../../core/middleware/authMiddleware.js";
import { onlyUserPasswordSchemaMiddleware } from "./validation/onlyUserPassword.middleware.js";

const userRouter = express.Router();
const mainPath = "/user";

userRouter.post(
  `${mainPath}/register`,
  userSchemaMiddleware,
  UserController.add
);

userRouter.get(
  `${mainPath}/login`,
  userSchemaMiddleware,
  UserController.login
);

userRouter.get(
  `${mainPath}/logout`,
  authMiddleware,
  UserController.logout
);

userRouter.patch(
  `${mainPath}/reset-password`,
  authMiddleware,
  onlyUserPasswordSchemaMiddleware,
  UserController.resetPassword
)

// userRouter.get(
//   `${mainPath}/get/:id`,
//   AffiliationOrganizationController.getFindById
// );
// userRouter.get(
//   `${mainPath}/getall`,
//   AffiliationOrganizationController.getAll
// );
// userRouter.delete(
//   `${mainPath}/delete/:id`,
//   AffiliationOrganizationController.deleteById
// );
// userRouter.patch(
//   `${mainPath}/update/:id`,
//   affiliationOrganizationSchemaMiddleware,
//   AffiliationOrganizationController.updateById
// );

export default userRouter;
