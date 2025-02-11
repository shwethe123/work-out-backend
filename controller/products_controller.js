const mongoose = require('mongoose');
const Products = require("../model/Porducts")

const product_controller = {
    index : async (req, res) => {
        try {
            const product_get = await Products.find().sort({ createdAt : -1});
            if (!product_get || product_get.lenght === 0) {
                return res.status(400).json({ msg : "Not found products"})
            };
            return res.status(200).json(product_get);
        } catch (error) {
            return res.status(500).json({ msg: "Error", error:error.message})
        }
    },

    store : async (req, res) => {
        try {
            const {product_select, name, email, phone, city,} = req.body;
            if (!product_select|| !name || !email || !phone || !city) {
                return res.status(400).json({msg : "All fields are required"})
            }
            const prodcut_store = await Products.create({
                product_select,
                name,
                email,
                phone,
                city
            });
            return res.status(200).json(prodcut_store);
        } catch (error) {
            return res.status(500).json({ msg : "Error", error:error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : "Invalid id format"})
            };
            const product_show = await Products.findById(id);
            if (!product_show) {
                return res.status(404).json({ msg : "Not found product Id"});
            };
            return res.status(200).json(product_show);
        } catch (error) {
            return res.status(500).json({msg : "Error", error: error.message});
        };
    },

    destory : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({msg : "Invalid id format"});
            };
            const product_deleted = await Products.findByIdAndDelete(id);
            if (!product_deleted) {
                return res.status(404).json({ msg : "Not found Product Id"});
            };
            return res.status(200).json(product_deleted)
        } catch (error) {
            return res.status(500).json({ msg: "Error", error: error.message})
        }
    },

    updated: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: "Invalid id format!" });
            }
            const product_update = await Products.findByIdAndUpdate(id, { ...req.body }, { new: true });
            if (!product_update) {
                return res.status(404).json({ msg: "Not found product Id" });
            }
            return res.status(200).json(product_update);
        } catch (error) {
            return res.status(500).json({ msg: "Error", error: error.message });
        }
    }
    
}
module.exports = product_controller;