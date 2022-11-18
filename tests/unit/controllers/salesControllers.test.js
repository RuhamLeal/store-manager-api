const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Sale = require('../../../src/services/sale.service');
const saleController = require('../../../src/controllers/sale.controller');
const { sale, registeredSale, allSales, foundSale, wrongSale } = require('./mocks/sales.mocks');


const { expect } = chai;
chai.use(sinonChai);

describe('Testing Sale Controller', () => {
  afterEach(sinon.restore);

  it('Testing if the addSale controller return error when passed a productId that does not exist', async () => {
    const req = { body: wrongSale };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Sale, 'registerSale')
      .resolves({ code: 404, data: { message: 'Product not found' }});

    await saleController.addSale(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found'  });
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