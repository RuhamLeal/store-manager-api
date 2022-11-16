const Sale = require('../models/sale.model');
const { validateNewSale } = require('./validations/salesValidations');

async function registerSale(sales) {
  try {
    const validationMessage = await validateNewSale(sales);
    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const registeredSale = await Sale.registerSale(sales);
    return { status: 201, data: registeredSale };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

module.exports = {
  registerSale,
};