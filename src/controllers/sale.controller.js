const { registerSale } = require('../services/sale.service');

const addSale = async (req, res) => {
  const { status, data } = await registerSale(req.body);
  return res.status(status).json(data);
};

module.exports = {
  addSale,
};