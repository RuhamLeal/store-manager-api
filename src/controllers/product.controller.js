const {
  findAllProducts,
  findProductById,
  registerProduct,
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

const addProduct = async (req, res) => {
  const { status, data } = await registerProduct(req.body);
  return res.status(status).json(data);
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};