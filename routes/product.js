import express from "express";
// import productController from "../controllers/productController.js";
const productRouter = express.Router();

//Activities ->  product object
productRouter.get('/', async (req, res) => {
    // productController.getAllProducts(req, res)
    res.send("ehllo")
});

productRouter.get('/:id', async (req, res) => {
    res.send("Get product by productid");
});

productRouter.post('/create', async (req, res) => {
    res.send("Create a new product");
});

export default productRouter