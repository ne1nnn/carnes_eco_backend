const express = require("express");
const router = express.Router();
const productController = require("../controllers/controller.product");

// Ruta GET /products
router.get("/", productController.getAllProducts);

// Ruta GET /products/:id
router.get("/:id", productController.getProductById);

// Ruta POST /products
router.post("/", productController.createProduct);

// Ruta PUT /products/:id
router.put("/:id", productController.updateProduct);

// Ruta DELETE /products/:id
router.delete("/:id", productController.deleteProduct);

module.exports = router;
