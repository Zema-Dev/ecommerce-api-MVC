import express from "express";
import ProductController from "../controllers/productController";

const ProductRouter = express.Router();

ProductRouter.get("/products", ProductController.getProducts);
ProductRouter.get("/products/:productId", ProductController.getProductById);
ProductRouter.post("/products", ProductController.createProduct);
ProductRouter.put("/products/:productId", ProductController.updateProduct);
ProductRouter.delete("/products/:productId", ProductController.deleteProduct);

export default ProductRouter;
