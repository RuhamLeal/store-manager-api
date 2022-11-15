const express = require('express');
const productRouter = require('./product.router');

const router = (app) => {
  app.use(
    express.json(),
    productRouter,
  );
};

module.exports = router;