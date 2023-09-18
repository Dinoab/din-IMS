const mongoose = require("mongoose")
userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Add Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Add Your Email Adress"],
        unique: true,
        trim: true,
        macth: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ],
        "Please enter a valid email adress"
    },

    password: {
        type: String,
        required: [true, "Please enter Your Password"],
        minLength: [6, "password length must be at least 6 characters"],
        maxLength: [25, "password length shall not be greater than 25 characters"],
    },
    photo: {
        type: String,
        required: [true, "Please enter Your profile picture"],
        defualt: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png",
    },

    phone: {
        type: String,
        default: "+251",
        
    },
    Developer:  {
        type: String,
        defaualt: "biography",
        maxLength: [250, "biography length shall not be greater than 250 characters"],
    },

} 
{
    timestamps: true,
});

const User = mongoose.model("User", userSchema)
module.exports = User