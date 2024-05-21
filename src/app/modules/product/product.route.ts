import express from "express";
import { ProductController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ValidatedProductSchema } from "./product.validation";

const router = express.Router();
// product created
router.post(
  "/products",
  validateRequest(ValidatedProductSchema.CreateZodValidationSchema),
  ProductController.createProduct
);
// get single product
router.get("/products/:productId", ProductController.getSingleProduct);
// product get all and serch
router.put(
  "/products/:productId",
  validateRequest(ValidatedProductSchema.UpdatedZodValidationSchema),
  ProductController.updatedProduct
);
router.delete("/products/:productId", ProductController.deleteProduct);
router.get("/products", ProductController.getAllProductDB);

export const ProductRoutes = router;
