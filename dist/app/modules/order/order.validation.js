"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidatedShcema = void 0;
const zod_1 = require("zod");
const CreateZodValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "Email is required" }),
        price: zod_1.z.number({ required_error: "price is required" }),
        quantity: zod_1.z.number({ required_error: "quantity is required" }),
        productId: zod_1.z.string({ required_error: "ProductId is Required" }),
    }),
});
exports.OrderValidatedShcema = {
    CreateZodValidationSchema,
};
