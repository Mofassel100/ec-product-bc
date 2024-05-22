import Product from "../product/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";

const createOrder = async (payload: TOrder) => {
  const { productId, quantity } = payload;

  const isProduct = await Product.findById({
    _id: productId,
  });
  console.log(isProduct);
  if (!isProduct) {
    throw new Error("Product not found");
  }
  if (
    isProduct?.inventory?.quantity < quantity ||
    isProduct?.inventory?.quantity === 0 ||
    quantity === 0
  ) {
    // res.status(500).json({
    //   success: false,
    //   message: "something went wrong",
    // });

    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Insufficient quantity available in inventory"
    );
  }
  if (
    isProduct?.inventory?.quantity > 0 &&
    isProduct?.inventory?.inStock === true
  ) {
    isProduct.inventory.quantity -= quantity;

    await isProduct.save();
    if (isProduct?.inventory?.quantity === 0) {
      isProduct.inventory.inStock = false;

      await isProduct.save();
    }
    (await Order.create(payload)).populate("productId");
  }
  if (isProduct?.inventory?.quantity === 0) {
    if (quantity <= isProduct.inventory.quantity) {
      // Update the product's inventory
      isProduct.inventory.inStock = false;
      await isProduct.save();
    }
  }
  const result = (await Order.create(payload)).populate("productId");
  return result;
};

// get all product and search any product key
export const OrderService = {
  createOrder,
};
