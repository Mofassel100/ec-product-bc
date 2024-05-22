"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
// product created
router.post("/products", (0, validateRequest_1.default)(product_validation_1.ValidatedProductSchema.CreateZodValidationSchema), product_controller_1.ProductController.createProduct);
// get single product
router.get("/products/:productId", product_controller_1.ProductController.getSingleProduct);
// product get all and serch
router.put("/products/:productId", (0, validateRequest_1.default)(product_validation_1.ValidatedProductSchema.UpdatedZodValidationSchema), product_controller_1.ProductController.updatedProduct);
router.delete("/products/:productId", product_controller_1.ProductController.deleteProduct);
router.get("/products", product_controller_1.ProductController.getAllProductDB);
exports.ProductRoutes = router;
