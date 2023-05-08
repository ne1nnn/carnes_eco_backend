const express = require("express");
const router = express.Router();
const productController = require("../controllers/controller.product");
<<<<<<< HEAD
const upload = require("../helpers/updateFile");
=======
const upload = require('../helpers/uploadFile');
>>>>>>> 80f368a5397a14ee73bb24811d063c16d2c3cf99

router.get("/all", productController.getAllProducts);

router.get("/:id", productController.getProductById);

<<<<<<< HEAD
router.post("/add", upload.single("image"), productController.createProduct);
=======
router.post("/add", upload.single('image') , productController.createProduct);
>>>>>>> 80f368a5397a14ee73bb24811d063c16d2c3cf99

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
