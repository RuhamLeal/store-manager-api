const { findProductById } = require('../../models/product.model');
const { newSaleSchema } = require('./validationsSchemas');

const validateProductId = async (sales) => {
  const products = await Promise.all(sales
    .map((sale) => findProductById(sale.productId)));
  return products.some((item) => item === undefined);
};

const validateEachSale = (sales) => {
  for (let idx = 0; idx < sales.length; idx += 1) {
    const { error } = newSaleSchema.validate(sales[idx]);
    if (error) return error;
  }
  return false;
};

const validateNewSale = async (sales) => {
  const error = validateEachSale(sales);
  if (error) {
    if (error.details[0].message === '"productId" is required'
        || error.details[0].message === '"quantity" is required') {
        return { status: 400, error: error.details[0].message };
    }
    return { status: 422, error: error.details[0].message };
  }
  const verifyProductId = await validateProductId(sales);
  if (verifyProductId) return { status: 404, error: 'Product not found' };
  return 'without errors';
};

module.exports = {
  validateNewSale,
};