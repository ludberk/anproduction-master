import express from "express";


import { ProductController } from "./product.controller.js";
import { uploadPhoto } from "../../core/middleware/photoMiddleware.js";
import { ProductSchemaMiddleware } from "./validation/product.middleware.js";

const productRouter = express.Router();



// router.get("/", getAllProducts);

// router.get("/:id", getProduct);
// router.put(
//   "/upload/:id",
//   authMiddleware,
//   uploadPhoto.array("images", 10),
//   productImgResize,
//   uploadImages
// );

// router.post("/", authMiddleware, createProduct);
// router.put("/:id", authMiddleware, updateProduct);
// router.delete("/:id", authMiddleware, deleteProduct);

productRouter.get(
  `/get/:id`,
  ProductController.getFindById
);

productRouter.post(
    `/add`,
    ProductSchemaMiddleware,
    ProductController.add
  );

productRouter.put(
    `/upload/:id`,
    uploadPhoto.array("file", 10),
    ProductController.uploadImages
)


productRouter.get(
  `/getall`,
  ProductController.getAll
);

productRouter.delete(
  `/delete-image/:id`,
  ProductController.deleteImages

)

productRouter.delete(
  `/delete/:id`,
  ProductController.deleteById
);

productRouter.patch(
  `/update/:id`,
  ProductSchemaMiddleware,
  ProductController.updateById
);

export default productRouter;
