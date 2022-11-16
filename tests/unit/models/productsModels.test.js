const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const Product = require('../../../src/models/product.model');
const { products, newProduct, insertProduct, newProductResponse, updatedProductMock } = require('./mocks/products.mock');

describe('Testing Product Model', () => {
  beforeEach(sinon.restore)
  it('Testing if the findAllProducts Model returns all products correctly', async () => {
    sinon.stub(connection, 'execute').resolves([products]);

    const response = await Product.findAllProducts();

    expect(response).to.be.equal(products);
  });

  it('Testing if the findProductById Model returns product correctly', async () => {
    sinon.stub(connection, 'execute').resolves([[products]]);

    const response = await Product.findProductById(1);

    expect(response).to.be.equal(products)
  });

  it('Testing the findProductById Model when passed id not existing', async () => {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await Product.findProductById(999);

    expect(response).to.be.undefined
  });

  it('Testing if the registerProduct Model add product correctly', async () => {
    sinon.stub(connection, 'execute').resolves([[newProductResponse]]);

    await Product.registerProduct('Armadura do homem de ferro');

    const response = await Product.findProductById(4)

    expect(response).to.be.deep.equal(newProductResponse);
  });

  it('Testing if the updateProduct Model returns updated product correctly', async () => {
    sinon.stub(connection, 'execute').resolves([[updatedProductMock]]);

    await Product.updateProduct(1, 'Relampago Mcqueen');

    const response = await Product.findProductById(1)

    expect(response).to.be.deep.equal(updatedProductMock)
  });
})