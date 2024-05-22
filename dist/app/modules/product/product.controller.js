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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const product_constant_1 = require("./product.constant");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ProductData = req.body;
        const result = yield product_service_1.ProductService.createProduct(ProductData);
        res.status(200).json({
            success: true,
            message: "Product is created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const getAllProductDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seartTerm = (0, pick_1.default)(req.query, product_constant_1.productSerchFileds);
        const result = yield product_service_1.ProductService.getAllProductDB(seartTerm);
        res.status(200).json({
            success: true,
            message: "Product is retaired successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const updatedProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const data = req.body;
        const result = yield product_service_1.ProductService.updateProduct(id, data);
        res.status(200).json({
            success: true,
            message: "Product is retaired successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.ProductService.getSingleProduct(id);
        res.status(200).json({
            success: true,
            message: "Product is retaired successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.ProductService.deleteProduct(id);
        res.status(200).json({
            success: true,
            message: "Product is deleted successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProductDB,
    getSingleProduct,
    updatedProduct,
    deleteProduct,
};
