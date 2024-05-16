import express from "express";
import { uploadPhoto } from "../../core/middleware/photoMiddleware.js";
import { CategoryController } from "./category.controller.js";
import { CategorySchemaMiddleware } from "./validation/category.middleware.js";

const categoryRouter = express.Router();



categoryRouter.get(
    `/get/:id`,
    CategoryController.getFindById
);

categoryRouter.post(
    `/add`,
    CategorySchemaMiddleware,
    CategoryController.add
);

categoryRouter.put(
    `/upload/:id`,
    uploadPhoto.single("file"),
    CategoryController.uploadImage
)


categoryRouter.get(
    `/getall`,
    CategoryController.getAll
);

categoryRouter.delete(
    `/delete-image/:id`,
    CategoryController.deleteImage

)

categoryRouter.delete(
    `/delete/:id`,
    CategoryController.deleteById
);

categoryRouter.patch(
    `/update/:id`,
    CategoryController.updateById
);

export default categoryRouter;
