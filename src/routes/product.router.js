const express = require('express');
const productController = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter
  .get('/products', productController.getProducts)
  .get('/products/:id', productController.getProductById);

module.exports = productRouter;
