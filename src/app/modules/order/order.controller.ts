import { Request, Response } from "express";
import { OrderService } from "./order.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../sendResponse";
import { TOrder } from "./order.interface";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const OrderData = req.body;
  const result = await OrderService.createOrder(OrderData);
  res.status(200).json({
    success: true,
    message: "Order is created successfully",
    data: result,
  });
  sendResponse<TOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin fetched successfully !",
    data: result,
  });
});
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
export const OrderController = {
  createOrder,
};
