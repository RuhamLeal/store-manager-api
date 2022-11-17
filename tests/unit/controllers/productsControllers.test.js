const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Product = require('../../../src/services/product.service');
const productController = require('../../../src/controllers/product.controller');
const { products, notfound, newProduct, updatedProduct } = require('./mocks/products.mocks');

const { expect } = chai;
chai.use(sinonChai);


describe('Testing Product Controller', () => {
  afterEach(sinon.restore)

  it('Testing if the getProducts controller returns products and call its service correctly', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Product, 'findAllProducts').resolves({ status: 200, data: products });

    await productController.getProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Testing if the getProductById controller return only the found product and call its service correctly', async () => {
    const req = { params: { id: 1 }, };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Product, 'findProductById')
      .resolves({ status: 200, data: products[0] });

    await productController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });

  it('Testing if the addProduct controller add the product and call its service correctly', async () => {
    const req = { body: { name: "Armadura do homem de ferro" }, };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Product, 'registerProduct')
      .resolves({ status: 200, data: newProduct });

    await productController.addProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it('Testing if the updateProductById controller update the product and call its service correctly', async () => {
    const req = { params: { id: 1 }, body: { name: 'Traje do pantera negra' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(Product, 'updateProduct')
      .resolves({ status: 200, data: updatedProduct });

    await productController.updateProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedProduct);
  });

  it('Testing if the deleteProductById controller delete the product and call its service correctly', async () => {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(Product, 'deleteProduct')
      .resolves({ status: 200 });

    await productController.deleteProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testing if the deleteProductById controller return error when passed a id that does not exists', async () => {
    const req = { params: { id: 999 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();
    res.json = sinon.stub().returns();

    sinon.stub(Product, 'deleteProduct')
      .resolves({ status: 404, data: notfound });

    await productController.deleteProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(notfound);
  });
});