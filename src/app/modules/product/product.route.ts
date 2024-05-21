import express from "express";

const router = express.Router();

router.post("/create-department");

router.get("/:id");

export const ProductRoutes = router;
