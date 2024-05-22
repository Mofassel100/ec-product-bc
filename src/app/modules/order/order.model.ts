import { Schema, model } from "mongoose";
import { OrderModel, TOrder } from "./order.interface";

// Define the Mongoose schema
const orderSchema = new Schema<TOrder, OrderModel>({
  email: { type: String, required: true },
  price: { type: Number, required: true },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Create the Mongoose model
const Order = model<TOrder, OrderModel>("Order", orderSchema);

export default Order;
