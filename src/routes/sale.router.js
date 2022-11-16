const express = require('express');
const saleController = require('../controllers/sale.controller');

const saleRouter = express.Router();

saleRouter
  .post('/sales', saleController.addSale);

module.exports = saleRouter;