"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const OrderData = req.body;
    const result = yield order_service_1.OrderService.createOrder(OrderData);
    res.status(200).json({
        success: true,
        message: "Order is created successfully",
        data: result,
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Admin fetched successfully !",
        data: result,
    });
}));
// const getAllProductDB = async (req: Request, res: Response) => {
//   try {
//     const seartTerm = pick(req.query, productSerchFileds);
//     const result = await ProductService.getAllProductDB(seartTerm);
//     res.status(200).json({
//       success: true,
//       message: "Product is retaired successfully",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "something went wrong",
//       error: err,
//     });
//   }
// };
exports.OrderController = {
    createOrder,
};
