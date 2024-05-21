/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { SortOrder } from "mongoose";

import httpStatus from "http-status";
import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  console.log(result);
  return result;
};

// const getSingleStudent = async (id: string): Promise<IStudent | null> => {
//   const result = await Student.findOne({ id })
//     .populate("academicSemester")
//     .populate("academicDepartment")
//     .populate("academicFaculty");
//   return result;
// };

// const updateStudent = async (
//   id: string,
//   payload: Partial<IStudent>
// ): Promise<IStudent | null> => {
//   const isExist = await Student.findOne({ id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, "Student not found !");
//   }

//   const { name, guardian, localGuardian, ...studentData } = payload;

//   const updatedStudentData: Partial<IStudent> = { ...studentData };

//   if (name && Object.keys(name).length > 0) {
//     Object.keys(name).forEach((key) => {
//       const nameKey = `name.${key}` as keyof Partial<IStudent>; // `name.fisrtName`
//       (updatedStudentData as any)[nameKey] = name[key as keyof typeof name];
//     });
//   }
//   if (guardian && Object.keys(guardian).length > 0) {
//     Object.keys(guardian).forEach((key) => {
//       const guardianKey = `guardian.${key}` as keyof Partial<IStudent>; // `guardian.fisrtguardian`
//       (updatedStudentData as any)[guardianKey] =
//         guardian[key as keyof typeof guardian];
//     });
//   }
//   if (localGuardian && Object.keys(localGuardian).length > 0) {
//     Object.keys(localGuardian).forEach((key) => {
//       const localGuradianKey =
//         `localGuardian.${key}` as keyof Partial<IStudent>; // `localGuardian.fisrtName`
//       (updatedStudentData as any)[localGuradianKey] =
//         localGuardian[key as keyof typeof localGuardian];
//     });
//   }

//   const result = await Student.findOneAndUpdate({ id }, updatedStudentData, {
//     new: true,
//   });
//   return result;
// };

// const deleteStudent = async (id: string): Promise<IStudent | null> => {
//   // check if the faculty is exist
//   const isExist = await Student.findOne({ id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, "Student not found !");
//   }

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     //delete student first
//     const student = await Student.findOneAndDelete({ id }, { session });
//     if (!student) {
//       throw new ApiError(404, "Failed to delete student");
//     }
//     //delete user
//     await User.deleteOne({ id });
//     session.commitTransaction();
//     session.endSession();

//     return student;
//   } catch (error) {
//     session.abortTransaction();
//     throw error;
//   }
// };

export const ProductService = {
  createProduct,
};
