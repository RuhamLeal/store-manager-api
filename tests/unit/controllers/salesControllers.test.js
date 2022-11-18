const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Sale = require('../../../src/services/sale.service');
const saleController = require('../../../src/controllers/sale.controller');
const { wrongSale, updatedSale, salesUpdated } = require('./mocks/sales.mocks');

const { expect } = chai;
chai.use(sinonChai);

describe('Testing Sale Controller', function () {
  afterEach(sinon.restore);

  it('Testing if the addSale controller return error when passed a productId that does not exist', async function () {
    const req = { body: wrongSale };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Sale, 'registerSale')
      .resolves({ status: 404, data: { message: 'Product not found' } });

    await saleController.addSale(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Testing if the deleteSale controller delete a sale and call its service correctly', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(Sale, 'deleteSale')
      .resolves({ status: 204 });

    await saleController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(204);
  });

  it('Testing if the deleteSale controller return error when passed a id that does not exists', async function () {
    const req = { params: { id: 999 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();
    res.json = sinon.stub().returns();

    sinon.stub(Sale, 'deleteSale')
      .resolves({ status: 404, data: { message: 'Sale not found' } });

    await saleController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });

  it('Testing if the updateSale controller update a sale and call its service correctly', async function () {
    const req = { params: { id: 1 }, body: updatedSale };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Sale, 'updateSale')
      .resolves({ status: 200, data: salesUpdated });

    await saleController.updateSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesUpdated);
  });

/*    it('Testing if the getSales returns all sales correctly', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Sale, 'findAllSales')
      .returns({ code: 200, data: allSales });

    await saleController.getSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
   });

  it('Testing if the getSaleById return the found sale correctly', async () => {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Sale, 'findSaleById')
      .returns({ code: 200, data: foundSale });

    await saleController.getSaleById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(foundSale);
  });  */
});