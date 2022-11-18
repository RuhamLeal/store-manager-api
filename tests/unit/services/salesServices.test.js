const { expect } = require('chai');
const sinon = require('sinon');
const saleModel = require('../../../src/models/sale.model');
const Sale = require('../../../src/services/sale.service');
const { saleError, serviceError, saleRegistered,
  saleService, serviceSuccess, saleWithoutId, notfound,
  allSales, saleId, notfoundSale, saleWithoutRightQuantity,
  serviceQuantityError, salesUpdated, updatedSale } = require('./mocks/sales.mock');

describe('Testing Sale Service', function () {
  afterEach(sinon.restore);

  it('Testing registerSale service return error when called without productId', async function () {
    const response = await Sale.registerSale(saleError);

    expect(response).to.deep.equal(serviceError);
  });

  it('Testing registerSale service register a sale correctly', async function () {
    sinon.stub(saleModel, 'registerSale').resolves(saleRegistered);

    const result = await Sale.registerSale(saleService);

    expect(result).to.deep.equal(serviceSuccess);
  });
  
  it('Testing registerSale service return error when passed a id that does not exists', async function () {
    const response = await Sale.registerSale(saleWithoutId);

    expect(response).to.deep.equal(notfound);
  });

  it('Testing registerSale service return error when passed a wrong quantity', async function () {
    const response = await Sale.registerSale(saleWithoutRightQuantity);

    expect(response).to.deep.equal(serviceQuantityError);
  });

  it('Testing findAllSales service return all sales correctly', async function () {
    sinon.stub(saleModel, 'findAllSales').resolves(allSales);
  
    const response = await Sale.findAllSales();

    expect(response).to.deep.equal({ status: 200, data: allSales });
  });

  it('Testing findAllSales service return error when occurring a error in database', async function () {
    sinon.stub(saleModel, 'findAllSales').resolves(undefined);

    const response = await Sale.findAllSales();

    expect(response).to.deep.equal({ status: 500, data: { message: 'Database internal ERROR' } });
  });

  it('Testing findSaleById service return the found sale correctly', async function () {
    sinon.stub(saleModel, 'findSaleById').resolves(saleId);

    const response = await Sale.findSaleById(1);

    expect(response).to.deep.equal({ status: 200, data: saleId });
  });
 
  it('Testing findSaleById service return error when search for non-existen sales', async function () {
    sinon.stub(saleModel, 'findSaleById').resolves([]);

    const response = await Sale.findSaleById(999);

    expect(response).to.deep.equal(notfoundSale);
  });

  it('Testing deleteSale service delete a sale correctly', async function () {
    sinon.stub(saleModel, 'deleteSale').resolves(true);

    const response = await Sale.deleteSale(1);

    expect(response).to.be.deep.equal({ status: 204 });
  });

  it('Testing deleteSale service returns error when passed a id that does not exists', async function () {
    sinon.stub(saleModel, 'deleteSale').resolves(false);

    const response = await Sale.deleteSale(999);

    expect(response).to.be.deep.equal(notfoundSale);
  });

  it('Testing updateSale service update a sale correctly', async function () {
    sinon.stub(saleModel, 'updateSale').resolves(salesUpdated);

    const response = await Sale.updateSale(1, updatedSale);

    expect(response).to.be.deep.equal({ status: 200, data: salesUpdated });
  });

  it('Testing updateSale return error when passed a id that does not exists', async function () {
    sinon.stub(saleModel, 'updateSale').resolves(false);

    const response = await Sale.updateSale(999, updatedSale);

    expect(response).to.be.deep.equal(notfoundSale);
  });

  it('Testing updateSale return error when not passed a correct sale', async function () {
    sinon.stub(saleModel, 'updateSale').resolves();

    const response = await Sale.updateSale(1, saleError);

    expect(response).to.be.deep.equal(serviceError);
  });
});
