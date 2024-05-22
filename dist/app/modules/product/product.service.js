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
exports.ProductService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = require("mongoose");
const product_model_1 = __importDefault(require("./product.model"));
const product_constant_1 = require("./product.constant");
const mongodb_1 = require("mongodb");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payload);
    console.log(result);
    return result;
});
// getSingle Product from DB
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const obId = new mongoose_1.Types.ObjectId(id);
    console.log(obId, id);
    const result = yield product_model_1.default.findById({ _id: new mongodb_1.ObjectId(id) });
    return result;
});
// get all product and search any product key
const getAllProductDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = search;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: product_constant_1.productSearchableFields.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield product_model_1.default.find(whereConditions);
    return result;
});
const getAllPDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = search;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: product_constant_1.productSearchableFields.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield product_model_1.default.find(whereConditions);
    return result;
});
// Updated product any or all data product
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield product_model_1.default.findOne({ _id: new mongodb_1.ObjectId(id) });
    if (!isExist) {
        throw new Error("Product not found !");
    }
    const updatedProductData = Object.assign({}, payload);
    const result = yield product_model_1.default.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, updatedProductData, {
        new: true,
    });
    return result;
});
// product Delete indivisual
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // check if the Product is exist
    const isExist = yield product_model_1.default.findOne({ _id: new mongodb_1.ObjectId(id) });
    if (!isExist) {
        throw new Error("Product not found !");
    }
    //delete Product first
    const product = yield product_model_1.default.findOneAndDelete({ _id: new mongodb_1.ObjectId(id) });
    if (!product) {
        throw new Error("Failed to delete Product");
    }
    return product;
});
exports.ProductService = {
    createProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    getAllProductDB,
    getAllPDB,
};
