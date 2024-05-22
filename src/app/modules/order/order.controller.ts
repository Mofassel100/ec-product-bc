import { NextFunction, Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const OrderData = req.body;
    const result = await OrderService.createOrder(OrderData);
    res.status(200).json({
      success: true,
      message: "Order is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.query.email as string | undefined;
    const result = await OrderService.getAllOrdersFromDB(email);

    res.status(200).json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const OrderController = {
  createOrder,
  getAllOrders,
};
