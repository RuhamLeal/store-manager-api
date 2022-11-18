const saleService = require('../services/sale.service');

const getSales = async (_req, res) => {
  const { status, data } = await saleService.findAllSales();
  return res.status(status).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await saleService.findSaleById(id);
  return res.status(status).json(data);
};

const addSale = async (req, res) => {
  const sales = req.body;
  const { status, data } = await saleService.registerSale(sales);
  return res.status(status).json(data);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await saleService.deleteSale(id);
  if (data) return res.status(status).json(data);
  return res.status(status).send();
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const salesToUpdate = req.body;
  const { status, data } = await saleService.updateSale(id, salesToUpdate);
  return res.status(status).json(data);
};

module.exports = {
  addSale,
  getSaleById,
  getSales,
  deleteSale,
  updateSale,
};