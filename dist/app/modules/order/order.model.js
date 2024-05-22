"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the Mongoose schema
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    price: { type: Number, required: true },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});
// Create the Mongoose model
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
