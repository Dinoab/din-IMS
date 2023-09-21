const express = require("express");
const { registerUser,
    loginUser,
    logout,
    getUser,
    loginStatus,
    updateUser,
    changePassword,
    forgotPassword,
    resetPassword, } = require("../controllers/userController");
const router =  express.Router();

const protect = require("../middleWare/authMiddleware");

// POST Methods 
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgotpassword", forgotPassword);

// GET Methods 
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);

// PATCH Methods 
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changePassword);
// PUT Methods 
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;