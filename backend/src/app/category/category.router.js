import express from "express";
import { uploadPhoto } from "../../core/middleware/photoMiddleware.js";
import { CategoryController } from "./category.controller.js";
import { CategorySchemaMiddleware } from "./validation/category.middleware.js";

const categoryRouter = express.Router();
const mainPath = "/category";


categoryRouter.get(
    `${mainPath}/get/:id`,
    CategoryController.getFindById
);

categoryRouter.post(
    `${mainPath}/add`,
    CategorySchemaMiddleware,
    CategoryController.add
);

categoryRouter.put(
    `${mainPath}/upload/:id`,
    uploadPhoto.single("file"),
    CategoryController.uploadImage
)


categoryRouter.get(
    `${mainPath}/getall`,
    CategoryController.getAll
);

categoryRouter.delete(
    `${mainPath}/delete-image/:id`,
    CategoryController.deleteImage

)

categoryRouter.delete(
    `${mainPath}/delete/:id`,
    CategoryController.deleteById
);

categoryRouter.patch(
    `${mainPath}/update/:id`,
    CategoryController.updateById
);

export default categoryRouter;
