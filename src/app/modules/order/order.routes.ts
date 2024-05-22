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
router.get("/orders", OrderController.getAllOrders);

export const OrderRoutes = router;
