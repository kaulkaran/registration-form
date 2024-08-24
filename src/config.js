require('dotenv').config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
const connect = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });



connect.then (() => {
    console.log("Database connected Successfully");
})
.catch(() => {
    console.log("Database cannot be connected");
});


const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const collection = new mongoose.model("users", LoginSchema)


module.exports = collection;