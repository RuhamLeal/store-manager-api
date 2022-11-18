const Sale = require('../models/sale.model');
const { validateNewSale } = require('./validations/salesValidations');

async function findAllSales() {
  try {
    const allSales = await Sale.findAllSales();
    if (allSales) return { status: 200, data: allSales };
    return { status: 500, data: { message: 'Database internal ERROR' } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

async function findSaleById(saleId) {
  try {
    const foundSales = await Sale.findSaleById(saleId);
    if (foundSales.length > 0) return { status: 200, data: foundSales };
    return { status: 404, data: { message: 'Sale not found' } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

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

async function deleteSale(saleId) {
  try {
    const deletedSale = await Sale.deleteSale(saleId);
    if (deletedSale) return { status: 204 };
    return { status: 404, data: { message: 'Sale not found' } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

async function updateSale(saleId, sales) {
  try {
    const validationMessage = await validateNewSale(sales);

    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const updatedSales = await Sale.updateSale(saleId, sales);

    if (updatedSales) return { status: 200, data: updatedSales };
    return { status: 404, data: { message: 'Sale not found' } };

  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
}

module.exports = {
  registerSale,
  findAllSales,
  findSaleById,
  deleteSale,
  updateSale,
};