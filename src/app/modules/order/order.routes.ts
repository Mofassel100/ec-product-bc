import express from "express";
import validateRequest from "../../middlewares/validateRequest";

import { OrderValidatedShcema } from "./order.validation";
import { OrderController } from "./order.controller";

const router = express.Router();
// product created
router.post(
  "/orders",
  validateRequest(OrderValidatedShcema.CreateZodValidationSchema),
  OrderController.createOrder
);
// router.get("/orders", ProductController.getAllProductDB);

export const OrderRoutes = router;
