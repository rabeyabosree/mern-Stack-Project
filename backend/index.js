const express = require("express");
const cors = require('cors');
const PORT =process.env.PORT || 9000
require('dotenv').config();
const dbConnection = require("./utilise/mongodbConnection");
const cloudinaryConfig = require("./utilise/cloudinary");


const app = express();
app.use(express.json())


dbConnection()
cloudinaryConfig()

const userRoute = require("./routers/userRoute");
const productRoute = require("./routers/productRoute")

app.use("/api/user", userRoute)
app.use("/api/products", productRoute)

app.get("/",(req , res)=>{
res.send("hello world")
})

app.listen(PORT, ()=>{
    console.log(` server is running at http://localhost:${PORT}`)
})

