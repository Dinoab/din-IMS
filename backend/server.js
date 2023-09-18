const dotenv  = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("./routes/userRoute")

const errorHandler = require("./middleWare/errorMiddleware")

const app = express()

//Middle wares
app.use(express.json)
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json)

// Routes middleware

app.use("/api/users",  userRoute)

//routes
app.get("/", (req, res) => {
res.send("Home Page");
})

//error middlware

app.use(errorHandler);

//CONNECT TO MONGODB AND START SERVER

const PORT = process.env.PORT || 8000;

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`)    })
    })
    .catch((err) => console.log(err))