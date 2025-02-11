const express = require('express');
const products_controller = require("../controller/products_controller");
// const { body } = require('express-validator');

const router = express.Router();

router.get('/api/products', products_controller.index);

router.post('/api/products', products_controller.store);

router.get('/api/products/:id', products_controller.show);

router.patch('/api/products/:id', products_controller.updated);

router.delete('/api/products/:id', products_controller.destory);

module.exports = router;