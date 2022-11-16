const { newSaleSchema } = require('./validationsSchemas');

const validateNewProduct = (newSale) => {
  const { error } = newSaleSchema.validate(newSale);
  if (error) {
    if (error.details[0].message === '"productId" is required'
      || error.details[0].message === '"quantity" is required') {
      return { status: 400, error: error.details[0].message };
    }
    return { status: 422, error: error.details[0].message };
  }
  return 'without errors';
};

module.exports = {
  validateNewProduct,
};