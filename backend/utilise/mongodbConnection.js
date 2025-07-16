const mongoose = require("mongoose");

const dbConnection = () => mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongo is connected"))
.catch((error)=>console.log(error));

module.exports = dbConnection