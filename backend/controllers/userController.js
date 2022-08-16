// Here login and registration logic will be written
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    const { name, password, email, pic } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please Enter all the Fields');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already Exists");
    }

    const user = await User.create({
        name, password, email, pic,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("Failed to create the user")
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { password, email } = req.body;
    const user = User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

module.exports = { registerUser, authUser }