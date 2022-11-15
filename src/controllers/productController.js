const {
  findAllProducts,
  findProductById,
} = require('../services/product.service');

const getProducts = async (_req, res) => {
  const { status, data } = await findAllProducts();
  return res.status(status).json(data);
};

const getProductById = async (_req, res) => {
  const { status, data } = await findProductById();
  return res.status(status).json(data);
};

module.exports = {
  getProducts,
  getProductById,
};