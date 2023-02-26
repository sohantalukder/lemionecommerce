import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { response } from "../utls/generateResponse.js";
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;
    if (orderItems && orderItems?.length === 0) {
        res.status(400).json(response(400, "No order items!", []));
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
        const createdOrder = await order.save();
        res.status(201).json(response(201, "Order Created", { createdOrder }));
    }
});
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req?.params.id).populate(
        "user",
        "name email"
    );
    if (order) {
        res.status(200).json(response(200, "Order found", order));
    } else {
        res.status(404).json(response(404, "Order not found", []));
    }
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req?.params.id);
    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
        };
        const updatedOrder = await order.save();
        res.status(200).json(
            response(200, "Payment successfully", updatedOrder)
        );
    } else {
        res.status(404).json(response(404, "Order not found", []));
    }
});

export { addOrderItems, getOrderById, updateOrderToPaid };
