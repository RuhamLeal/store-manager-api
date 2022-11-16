const { newProductSchema } = require('./validationsSchemas');

const validateNewProduct = (newProduct) => {
  const { error } = newProductSchema.validate(newProduct);
  if (error) {
    if (error.details[0].message === '"name" is required') {
      return { status: 400, error: error.details[0].message };
    }
    return { status: 422, error: error.details[0].message };
  }
  return 'without errors';
};

module.exports = {
  validateNewProduct,
};