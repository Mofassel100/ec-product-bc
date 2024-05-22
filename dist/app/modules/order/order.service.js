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
exports.OrderService = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const { productId, quantity } = payload;
    const isProduct = yield product_model_1.default.findById({
        _id: productId,
    });
    console.log(isProduct);
    if (!isProduct) {
        throw new Error("Product not found");
    }
    if (((_a = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _a === void 0 ? void 0 : _a.quantity) < quantity ||
        ((_b = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _b === void 0 ? void 0 : _b.quantity) === 0 ||
        quantity === 0) {
        // res.status(500).json({
        //   success: false,
        //   message: "something went wrong",
        // });
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Insufficient quantity available in inventory");
    }
    if (((_c = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _c === void 0 ? void 0 : _c.quantity) > 0 &&
        ((_d = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _d === void 0 ? void 0 : _d.inStock) === true) {
        isProduct.inventory.quantity -= quantity;
        yield isProduct.save();
        if (((_e = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _e === void 0 ? void 0 : _e.quantity) === 0) {
            isProduct.inventory.inStock = false;
            yield isProduct.save();
        }
        (yield order_model_1.default.create(payload)).populate("productId");
    }
    if (((_f = isProduct === null || isProduct === void 0 ? void 0 : isProduct.inventory) === null || _f === void 0 ? void 0 : _f.quantity) === 0) {
        if (quantity <= isProduct.inventory.quantity) {
            // Update the product's inventory
            isProduct.inventory.inStock = false;
            yield isProduct.save();
        }
    }
    const result = (yield order_model_1.default.create(payload)).populate("productId");
    return result;
});
// get all product and search any product key
exports.OrderService = {
    createOrder,
};
