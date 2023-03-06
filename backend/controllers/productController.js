import asyncHandler from "express-async-handler";
import Product from "../models/productsModel.js";
const getProducts = asyncHandler(async (req, res) => {
    const sort = { _id: -1 };
    const products = await Product.find({}).sort(sort);
    res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

export { getProducts, getProductById };
