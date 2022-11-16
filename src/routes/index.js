const express = require('express');
const productRouter = require('./product.router');
const saleRouter = require('./sale.router');

const router = (app) => {
  app.use(
    express.json(),
    productRouter,
    saleRouter,
  );
};

module.exports = router;