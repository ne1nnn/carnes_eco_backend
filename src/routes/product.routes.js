const express = require("express");
const router = express.Router();
const productController = require("../controllers/controller.product");
const upload = require("../helpers/updateFile");

router.get("/all", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.post("/add", upload.single("image"), productController.createProduct);

router.put("/product/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
