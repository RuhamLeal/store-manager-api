const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const Sale = require('../../../src/models/sale.model');
const { salesSold, sale, allSales, saleResponse } = require('./mocks/sales.mock');

describe('Testing Sale Model', () => {
  afterEach(sinon.restore);
    it('Testing if the registerSale model register a sale correctly', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);

      const response = await Sale.registerSale(sale);

      expect(response).to.be.deep.equal(salesSold);
    });

  it('Testing if the findAllSales model returns all sales correctly', async () => {
      sinon.stub(connection, 'execute').resolves([allSales]);

      const response = await Sale.findAllSales();

      expect(response).to.be.deep.equal(allSales);
    });

  it('Testing if the findSaleById model returns the found sale by id correctly', async () => {
      sinon.stub(connection, 'execute').resolves([saleResponse]);

      const response = await Sale.findSaleById(1);

      expect(response).to.be.deep.equal(saleResponse);
  });
  it('Testing if the findSaleById model returns a empty array when not found the sale', async () => {
    sinon.stub(connection, 'execute').resolves([]);

    const response = await Sale.findSaleById(999);

    expect(response).to.be.equal(undefined);
  });
  });