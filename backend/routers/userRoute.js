const express = require("express");
const { registeruser, loginuser, registerAdmin } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registeruser)

router.post("/login", loginuser)

router.post("/admin",registerAdmin)


module.exports =router