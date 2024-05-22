"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatedProductSchema = void 0;
const zod_1 = require("zod");
// Define the TVariants schema
const TVariantsSchema = zod_1.z.object({
    type: zod_1.z.string({ required_error: "type is required on Variants" }),
    value: zod_1.z.string({ required_error: "values is required on Variants" }),
});
// Define
const TInventorySchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
// Define the TProduct schema
const CreateZodValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        description: zod_1.z.string({ required_error: "Description is Required" }),
        price: zod_1.z.number({ required_error: "price is required" }),
        category: zod_1.z.string({ required_error: "category is Required" }),
        tags: zod_1.z.array(zod_1.z.string({ required_error: "tags is required" })),
        variants: zod_1.z.array(TVariantsSchema),
        inventory: TInventorySchema,
    }),
});
// Define the TProduct schema
const UpdatedZodValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        category: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        variants: zod_1.z.array(TVariantsSchema).optional(),
        inventory: TInventorySchema.optional(),
    }),
});
exports.ValidatedProductSchema = {
    CreateZodValidationSchema,
    UpdatedZodValidationSchema,
};
