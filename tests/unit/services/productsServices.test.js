const { expect } = require('chai');
const sinon = require('sinon');
const ProductModel = require('../../../src/models/product.model');
const Product = require('../../../src/services/product.service');
const {
  products,
  product,
  notFound,
  databaseError,
  newProduct,
  updatedProduct } = require('./mocks/products.mock');

describe('Testing Product Service', () => {
  beforeEach(sinon.restore);
  it('Testing if the findAllProducts service returns all products correctly', async () => {
    sinon.stub(ProductModel, 'findAllProducts').resolves(products);

    const response = await Product.findAllProducts();

    expect(response.status).to.be.equal(200)
    expect(response.data).to.be.deep.equal(products);
  });
  it('Testing if the findAllProducts service returns undefined when occurring some error in database', async () => {
    sinon.stub(ProductModel, 'findAllProducts').resolves(undefined);

    const response = await Product.findAllProducts();

    expect(response.status).to.be.equal(500)
    expect(response.data).to.be.deep.equal(databaseError);
  });
  it('Testing if the findProductByID service returns only the found product', async () => {
    sinon.stub(ProductModel, 'findProductById').resolves(product);

    const response = await Product.findProductById(1);

    expect(response.status).to.be.equal(200)
    expect(response.data).to.be.deep.equal(product);
  });

  it('Testing if the findProductByID service return error when passed a id that does not exist', async () => {
    sinon.stub(ProductModel, 'findProductById').resolves(undefined);

    const response = await Product.findProductById(999);

    expect(response.status).to.be.equal(404);
    expect(response.data).to.be.deep.equal(notFound);
  });

  it('Testing if the registerProduct service register a product correctly', async () => {
    sinon.stub(ProductModel, 'registerProduct').resolves(newProduct);

    const response = await Product.registerProduct({ name: 'Armadura do homem de ferro' });

    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.deep.equal(newProduct)
  });
  
  it('Testing if the registerProduct service return error when passed a name with less than five characters', async () => {
    sinon.stub(ProductModel, 'registerProduct').resolves();

    const response = await Product.registerProduct({ name: 'AAAA' });

    expect(response.status).to.be.equal(422);
    expect(response.data).to.be.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  it('Testing if the registerProduct service return error when key "name" is not passed', async () => {
    sinon.stub(ProductModel, 'registerProduct').resolves();


    const response = await Product.registerProduct({ campoName: 'Tony Stark'});
    
    expect(response.status).to.be.equal(400);
    expect(response.data).to.be.deep.equal({ message: '"name" is required' });
  });

  it('Testing if the updateProduct service update a product correctly', async () => {
    sinon.stub(ProductModel, 'updateProduct').resolves(updatedProduct);


    const response = await Product.updateProduct(1, 'Traje do homem aranha');

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.deep.equal(updatedProduct);
  });

  it('Testing if the updateProduct service return error when passed a name with less than five characters', async () => {
    sinon.stub(ProductModel, 'updateProduct').resolves();

    const response = await Product.updateProduct(1, 'AAAA');

    expect(response.status).to.be.equal(422);
    expect(response.data).to.be.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  it('Testing if the updateProduct service return error when key "name" is not passed', async () => {
    sinon.stub(ProductModel, 'updateProduct').resolves();


    const response = await Product.updateProduct(1);

    expect(response.status).to.be.equal(400);
    expect(response.data).to.be.deep.equal({ message: '"name" is required' });
  });

  it('Testing if the updateProduct service return error when passed a id that does not exist', async () => {
    sinon.stub(ProductModel, 'updateProduct').resolves(undefined);

    const response = await Product.updateProduct(999, 'Traje do homem aranha');

    expect(response.status).to.be.equal(404);
    expect(response.data).to.be.deep.equal(notFound);
  });

  it('Testing if the deleteProduct service delete a product correctly', async () => {
    sinon.stub(ProductModel, 'deleteProduct').resolves(true);

    const response = await Product.deleteProduct(1);

    expect(response.status).to.be.equal(204);
  });

  it('Testing if the deleteProduct service return error when passed a id that does not exist', async () => {
    sinon.stub(ProductModel, 'deleteProduct').resolves(false);

    const response = await Product.deleteProduct(999);

    expect(response.status).to.be.equal(404);
    expect(response.data).to.be.deep.equal(notFound);
  });
});