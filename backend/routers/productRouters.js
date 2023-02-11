const express = require("express")
const router = express.Router()

const {getAllProducts, getProductById} = require("../controller/productControllers")

/* get all products from DB */
/* get api/products */
router.get("/", getAllProducts)

/* get product by ID from DB */
router.get("/:id", getProductById)

module.exports = router;
