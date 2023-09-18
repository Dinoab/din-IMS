const registerUser = async (req, res) => {

    if (!req.body.email){
        res.status(400);
        throw new Error("Please add an email");
    }
    res.send("Register User");
};

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs")

const registerUser = asyncHandler( async(req, res) => {
    const {name, email, password} = req.body;
  // Validation of user
  if (!name || !email || !password){
    res.status(400);
    throw new Error("Please fill in all required feilds");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be greater than 6 characters");
  }
  
  // check user email if already existed before 
const userExists = await User.findOne({email});
if (userExists) {
    res.status(400);
    throw new Error("User Email Already Exists");
}
//Encrypt password before saving
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);




// Create new user
const user = await User.create({
    name,
    email,
    password: hashedPassword,
});
if (user) {
    const {_id, name, email, photo, phone, developer} = user;
    res.status(201).json({ _id, name, email, photo, phone, developer})
   } 
else {
    res.status(400);
    throw new Error("Invalid User");
   }


});

module.exports = {
    registerUser, 
}