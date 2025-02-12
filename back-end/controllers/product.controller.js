import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, description, image } = req.body;

  //validate the product inputs
  if (!name || !price || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }
  //create new product
  const newProduct = new Product({
    name,
    price,
    description,
    image,
  });
  //save the product
  try {
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product saved successfully", data: newProduct });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  const _id = req.params;
  const { name, price, description, image } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      _id,
      { name, price, description, image },
      { new: true }
    );
    res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  const _id = req.params;
  try {
    await Product.findByIdAndDelete(_id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
