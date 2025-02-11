const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product_schema = new Schema({
    product_select : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phone : {
        type : Number,
        required : true
    },

    city : {
        type : String,
        required : true
    }

}, { timestamps : true });

module.exports = mongoose.model("Products", Product_schema);