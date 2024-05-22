"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("../modules/product/product.route");
const order_routes_1 = require("../modules/order/order.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/",
        route: product_route_1.ProductRoutes,
    },
    {
        path: "/",
        route: order_routes_1.OrderRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
