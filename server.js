const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Products = require("./router/product");
const cors = require('cors')

dotenv.config();

const PORT = process.env.PORT
const MONGOOSE_URL = process.env.MONGOOSE_URL



const app = express();
app.use(morgan('dev'));
app.use(express.json("div"));
app.use(cors());

mongoose.connect(MONGOOSE_URL).then(() => {
    console.log("Mongoose database is connected");
    app.listen(PORT, () => {
        console.log(`Server is runing on port ${PORT}`)
    })
}).catch((error) => {
    console.log("Mogooose DB connection error", error);
})

app.get('/', (req, res) => {
    return res.json({msg : "Hello World"})
});

app.use(Products);

