import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import { response } from "../utls/generateResponse.js";
import generateToken from "../utls/generateToken.js";
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.status(200).json(
            response(200, "Ok", {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        );
    } else {
        res.status(401).json(response(401, "Invalid email or password", []));
    }
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json(response(400, "User already exits", []));
    }
    const user = await User.create({
        name,
        email,
        password,
    });
    if (user) {
        res.status(201).json(
            response(201, "Ok", {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        );
    } else {
        res.status(400).json(400, "Invalid user data", []);
    }
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.status(200).json(
            response(200, "Ok", {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            })
        );
    } else {
        res.status(404).json(response(404, "User not found!", []));
    }
});

export { authUser, getUserProfile, registerUser };
