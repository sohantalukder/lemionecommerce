import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("API in running ....");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
    )
);
