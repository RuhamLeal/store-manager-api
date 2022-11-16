const Product = require('../models/product.model');
const { validateNewProduct, validateProductToUpdate } = require('./validations/productValidations');

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

async function registerProduct(product) {
  try {
    const validationMessage = await validateNewProduct(product);

    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const registeredProduct = await Product.registerProduct(product.name);
    return { status: 201, data: registeredProduct };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

async function updateProduct(productId, productName) {
  try {
    const validationMessage = await validateProductToUpdate(productName);

    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const updatedProduct = await Product.updateProduct(productId, productName);
    if (updatedProduct) return { status: 200, data: updatedProduct };
    return { status: 404, data: { message: 'Product not found' } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

module.exports = {
  findAllProducts,
  updateProduct,
  findProductById,
  registerProduct,
};