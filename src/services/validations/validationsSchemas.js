const Joi = require('joi');

const newProductSchema = Joi.object({
  name: Joi.string().min(5).required().messages(
    {
    'string.empty': '"name" is required',
    'any.required': '"name" is required',
    'string.min': '"name" length must be at least 5 characters long',
    },
  ),
});

const newSaleSchema = Joi.object({
  productId: Joi.number().min(1).required().messages({
    'any.required': '"productId" is required',
    'number.min': '"quantity" must be greater than or equal to 1',
  }),
  quantity: Joi.number().min(1).required().messages({
    'any.required': '"quantity" is required',
    'number.min': '"quantity" must be greater than or equal to 1',
  }),
});

module.exports = {
  newProductSchema,
  newSaleSchema,
};