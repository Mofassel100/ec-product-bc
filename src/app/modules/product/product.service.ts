/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";
import { IProductSerchble, TProduct } from "./product.interface";
import Product from "./product.model";

import { productSearchableFields } from "./product.constant";
import { ObjectId } from "mongodb";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  console.log(result);
  return result;
};

// getSingle Product from DB
const getSingleProduct = async (id: string): Promise<TProduct | null> => {
  const obId = new Types.ObjectId(id);
  console.log(obId, id);
  const result = await Product.findById({ _id: new ObjectId(id) });
  return result;
};

// get all product and search any product key
const getAllProductDB = async (
  search: IProductSerchble
): Promise<TProduct[]> => {
  const { searchTerm } = search;
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: productSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Product.find(whereConditions);
  return result;
};
const getAllPDB = async (search: IProductSerchble): Promise<TProduct[]> => {
  const { searchTerm } = search;
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: productSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Product.find(whereConditions);
  return result;
};

// Updated product any or all data product
const updateProduct = async (
  id: string,
  payload: Partial<TProduct>
): Promise<TProduct | null> => {
  const isExist = await Product.findOne({ _id: new ObjectId(id) });

  if (!isExist) {
    throw new Error("Product not found !");
  }

  const updatedProductData: Partial<TProduct> = { ...payload };
  const result = await Product.findOneAndUpdate(
    { _id: new ObjectId(id) },
    updatedProductData,
    {
      new: true,
    }
  );
  return result;
};

// product Delete indivisual
const deleteProduct = async (id: string): Promise<TProduct | null> => {
  // check if the Product is exist

  const isExist = await Product.findOne({ _id: new ObjectId(id) });

  if (!isExist) {
    throw new Error("Product not found !");
  }

  //delete Product first
  const product = await Product.findOneAndDelete({ _id: new ObjectId(id) });
  if (!product) {
    throw new Error("Failed to delete Product");
  }

  return product;
};

export const ProductService = {
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  getAllProductDB,
  getAllPDB,
};
