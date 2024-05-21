import { z } from "zod";

// Define the TVariants schema
const TVariantsSchema = z.object({
  type: z.string({ required_error: "type is required on Variants" }),
  value: z.string({ required_error: "values is required on Variants" }),
});

// Define
const TInventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Define the TProduct schema
const CreateZodValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    description: z.string({ required_error: "Description is Required" }),
    price: z.number({ required_error: "price is required" }),
    category: z.string({ required_error: "category is Required" }),
    tags: z.array(z.string({ required_error: "tags is required" })),
    variants: z.array(TVariantsSchema),
    inventory: TInventorySchema,
  }),
});
// Define the TProduct schema
const UpdatedZodValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    variants: z.array(TVariantsSchema).optional(),
    inventory: TInventorySchema.optional(),
  }),
});
export const ValidatedProductSchema = {
  CreateZodValidationSchema,
  UpdatedZodValidationSchema,
};
