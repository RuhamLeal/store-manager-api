const {
  findAllProducts,
  findProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
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

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { status, data } = await updateProduct(id, name);
  return res.status(status).json(data);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await deleteProduct(id);
  if (data) return res.status(status).json(data);
  return res.status(status).send();
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
};