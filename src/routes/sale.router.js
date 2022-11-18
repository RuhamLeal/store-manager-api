const express = require('express');
const saleController = require('../controllers/sale.controller');

const saleRouter = express.Router();

saleRouter
  .get('/sales', saleController.getSales)
  .get('/sales/:id', saleController.getSaleById)
  .post('/sales', saleController.addSale)
  .put('/sales/:id', saleController.updateSale)
  .delete('/sales/:id', saleController.deleteSale);

module.exports = saleRouter;