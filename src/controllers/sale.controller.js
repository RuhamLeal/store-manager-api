const { registerSale, findAllSales, findSaleById } = require('../services/sale.service');

const getSales = async (_req, res) => {
  const { status, data } = await findAllSales();
  return res.status(status).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await findSaleById(id);
  return res.status(status).json(data);
};

const addSale = async (req, res) => {
  const { status, data } = await registerSale(req.body);
  return res.status(status).json(data);
};

module.exports = {
  addSale,
  getSaleById,
  getSales,
};