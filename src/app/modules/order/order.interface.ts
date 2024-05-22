import { Model, Types } from "mongoose";
import { TProduct } from "../product/product.interface";

export type TOrder = {
  email: string;
  productId: Types.ObjectId | TProduct;
  price: number;
  quantity: number;
};
export type OrderModel = Model<TOrder, Record<string, unknown>>;
export type TOrderFilter = {
  email?: string;
};
