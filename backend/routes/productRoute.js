const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  uploadImages,
} = require("../controller/productController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.put(
  "/upload/:id",
  authMiddleware,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.post("/", authMiddleware, createProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
