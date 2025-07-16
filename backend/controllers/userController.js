const express = require('express');
const User = require('../models/usermodel');
const bcrypt = require("bcryptjs");
const generateToken = require('../middlewares/generateToken');
const validator = require('validator');


const registeruser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.json({ message: "User already exists" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ message: "Please enter a valid email" });
        }

        // Check password strength
        if (password.length < 6) { // Adjust length as needed
            return res.json({ message: "Please enter a strong password" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Generate token after user creation
        const token = generateToken(newUser._id);

        res.status(200).json({ message: 'Registration successful', newUser, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User don't exists" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        // Check password strength
        if (isMatch) { // Adjust length as needed
            const token = generateToken(user._id)
            return res.json({ message: "login successful", token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}
const registerAdmin = async (req, res) => {

}



module.exports = { registerAdmin, registeruser, loginuser }