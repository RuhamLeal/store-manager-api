const express = require('express');
const productController = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter
  .get('/products', productController.getProducts)
  .get('/products/:id', productController.getProductById)
  .put('/products/:id', productController.updateProductById)
  .delete('/products/:id', productController.deleteProductById)
  .post('/products', productController.addProduct);

module.exports = productRouter;
