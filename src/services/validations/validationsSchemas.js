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

module.exports = {
  newProductSchema,
};