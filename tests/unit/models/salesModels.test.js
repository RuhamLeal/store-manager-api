const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const Sale = require('../../../src/models/sale.model');
const { 
  registeredSale,
  sale, 
  allSales,
  foundSale,
  updatedSale,
  salesUpdated,
} = require('../mocks/sale.mocks');

describe('Testing Sale Model', function () {
  afterEach(sinon.restore);
    it('Testing if the registerSale model register a sale correctly', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);

      const response = await Sale.registerSale(sale);

      expect(response).to.be.deep.equal(registeredSale);
    });

  it('Testing if the findAllSales model returns all sales correctly', async function () {
      sinon.stub(connection, 'execute').resolves([allSales]);

      const response = await Sale.findAllSales();

      expect(response).to.be.deep.equal(allSales);
    });

  it('Testing if the findSaleById model returns the found sale by id correctly', async function () {
      sinon.stub(connection, 'execute').resolves([foundSale]);

      const response = await Sale.findSaleById(1);

      expect(response).to.be.deep.equal(foundSale);
  });

  it('Testing if the findSaleById model returns a empty array when not found the sale', async function () {
    sinon.stub(connection, 'execute').resolves([]);

    const response = await Sale.findSaleById(999);

    expect(response).to.be.equal(undefined);
  });

  it('Testing if the deleteSale model delete a sale correctly', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await Sale.deleteSale(1);

    expect(response).to.be.equal(1);
  });

  it('Testing if the deleteSale model return error when passed a id that does not exists', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

    const response = await Sale.deleteSale(999);

    expect(response).to.be.equal(0);
  });

  it('Testing if the updateSale model update a sale correctly', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await Sale.updateSale(1, updatedSale);

    expect(response).to.be.deep.equal(salesUpdated);
  });

  it('Testing if the updateSale model return error when passed a id that does not exists', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

    const response = await Sale.updateSale(999, updatedSale);

    expect(response).to.be.false;
  });
});