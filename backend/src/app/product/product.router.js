import express from "express";


import { ProductController } from "./product.controller.js";
import { uploadPhoto } from "../../core/middleware/photoMiddleware.js";
import { ProductSchemaMiddleware } from "./validation/product.middleware.js";

const productRouter = express.Router();
const mainPath = "/product";


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
  `${mainPath}/get/:id`,
  ProductController.getFindById
);

productRouter.post(
    `${mainPath}/add`,
    ProductSchemaMiddleware,
    ProductController.add
  );

productRouter.put(
    `${mainPath}/upload/:id`,
    uploadPhoto.array("file", 10),
    ProductController.uploadImages
)


productRouter.get(
  `${mainPath}/getall`,
  ProductController.getAll
);

productRouter.delete(
  `${mainPath}/delete-image/:id`,
  ProductController.deleteImages

)

productRouter.delete(
  `${mainPath}/delete/:id`,
  ProductController.deleteById
);

productRouter.patch(
  `${mainPath}/update/:id`,
  ProductController.updateById
);

export default productRouter;
