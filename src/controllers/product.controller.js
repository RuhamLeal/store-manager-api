const {
  findAllProducts,
  findProductById,
} = require('../services/product.service');

const getProducts = async (_req, res) => {
  const { status, data } = await findAllProducts();
  return res.status(status).json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await findProductById(id);
  return res.status(status).json(data);
};

module.exports = {
  getProducts,
  getProductById,
};