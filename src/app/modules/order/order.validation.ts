import { z } from "zod";

const CreateZodValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }),
    price: z.number({ required_error: "price is required" }),
    quantity: z.number({ required_error: "quantity is required" }),
    productId: z.string({ required_error: "ProductId is Required" }),
  }),
});
export const OrderValidatedShcema = {
  CreateZodValidationSchema,
};
