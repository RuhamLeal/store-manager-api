const Product = require('../models/productModel');

async function findAllProducts() {
  try {
    const allProducts = await Product.findAllProducts();
    if (allProducts) return { status: 200, data: allProducts };
    return { status: 500, data: { message: 'database internal ERROR' } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

async function findProductById(productId) {
  try {
    const foundProduct = await Product.findProductById(productId);
    if (foundProduct) return { status: 200, data: foundProduct };
    return { status: 404, data: { message: 'Product not found' } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

module.exports = {
  findAllProducts,
  findProductById,
};