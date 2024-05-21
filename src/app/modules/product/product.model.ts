import { Schema, model } from "mongoose";
import { ProductModel, TProduct } from "./product.interface";

// Define the Mongoose schema
const productSchema = new Schema<TProduct, ProductModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: [
    {
      type: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

// Create the Mongoose model
const Product = model<TProduct, ProductModel>("Product", productSchema);

export default Product;
