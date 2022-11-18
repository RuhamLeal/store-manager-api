const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const product = require('../../../src/models/product.model');
const { products, newProduct, insertProduct, newProductResponse, updatedProductMock } = require('./mocks/products.mock');

describe('Testing Product Model', () => {
  afterEach(sinon.restore);
  it('Testing if the findAllProducts Model returns all products correctly', async () => {
    sinon.stub(connection, 'execute').resolves([products]);

    const response = await product.findAllProducts();

    expect(response).to.be.equal(products);
  });

  it('Testing if the findProductById Model returns product correctly', async () => {
    sinon.stub(connection, 'execute').resolves([[products]]);

    const response = await product.findProductById(1);

    expect(response).to.be.equal(products)
  });

  it('Testing the findProductById Model when passed id not existing', async () => {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await product.findProductById(999);

    expect(response).to.be.undefined
  });

  it('Testing if the registerProduct Model add product correctly', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const response = await product.registerProduct('Armadura do homem de ferro');

    expect(response).to.be.deep.equal(newProductResponse);
  });

  it('Testing if the updateProduct Model update product correctly', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await product.updateProduct(1, 'Relampago Mcqueen');

    expect(response).to.be.deep.equal(updatedProductMock)
  });


  it('Testing if the updateProduct Model return error when passed a id that does not exist', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

    const response = await product.updateProduct(999, 'Relampago Mcqueen');

    expect(response).to.be.false;
  });

  it('Testing if the deleteProduct Model delete a product correctly', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await product.deleteProduct(1);

    expect(response).to.be.equal(1);
  });

  it('Testing if the deleteProduct Model return error when passed a id that does not exist', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

    const response = await product.deleteProduct(999);

    expect(response).to.be.equal(0);
  });
})