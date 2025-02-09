import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);

router.put("/:_id", updateProduct);
router.delete("/:_id", deleteProduct);

export default router;
