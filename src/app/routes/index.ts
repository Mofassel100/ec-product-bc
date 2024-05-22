import express from "express";
import { ProductRoutes } from "../modules/product/product.route";
import { OrderRoutes } from "../modules/order/order.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: ProductRoutes,
  },
  {
    path: "/",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
