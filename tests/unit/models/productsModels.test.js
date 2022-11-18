const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const product = require('../../../src/models/product.model');
const { products, newProductResponse, updatedProduct } = require('../mocks/product.mocks');

describe('Testing Product Model', function () {
  afterEach(sinon.restore);
  it('Testing if the findAllProducts Model returns all products correctly', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const response = await product.findAllProducts();

    expect(response).to.be.equal(products);
  });

  it('Testing if the findProductById Model returns product correctly', async function () {
    sinon.stub(connection, 'execute').resolves([[products]]);

    const response = await product.findProductById(1);

    expect(response).to.be.equal(products);
  });

  it('Testing the findProductById Model when passed id not existing', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await product.findProductById(999);

    expect(response).to.be.undefined;
  });

  it('Testing if the registerProduct Model add product correctly', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const response = await product.registerProduct('Armadura do homem de ferro');

    expect(response).to.be.deep.equal(newProductResponse);
  });

  it('Testing if the updateProduct Model update product correctly', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await product.updateProduct(1, 'Traje do pantera negra');

    expect(response).to.be.deep.equal(updatedProduct);
  });

  it('Testing if the updateProduct Model return error when passed a id that does not exist', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

    const response = await product.updateProduct(999, 'Traje do pantera negra');

    expect(response).to.be.false;
  });

  it('Testing if the deleteProduct Model delete a product correctly', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await product.deleteProduct(1);

    expect(response).to.be.equal(1);
  });

  it('Testing if the deleteProduct Model return error when passed a id that does not exist', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

    const response = await product.deleteProduct(999);

    expect(response).to.be.equal(0);
  });
});