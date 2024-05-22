import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import pick from "../../../shared/pick";
import { productSerchFileds } from "./product.constant";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ProductData = req.body;
    const result = await ProductService.createProduct(ProductData);
    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllProductDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const seartTerm = pick(req.query, productSerchFileds);
    const result = await ProductService.getAllProductDB(seartTerm);
    res.status(200).json({
      success: true,
      message: "Product is retaired successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updatedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.productId;
    const data = req.body;
    const result = await ProductService.updateProduct(id, data);
    res.status(200).json({
      success: true,
      message: "Product is retaired successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.productId;
    const result = await ProductService.getSingleProduct(id);
    res.status(200).json({
      success: true,
      message: "Product is retaired successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.productId;
    const result = await ProductService.deleteProduct(id);
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ProductController = {
  createProduct,
  getAllProductDB,
  getSingleProduct,
  updatedProduct,
  deleteProduct,
};
