const connection = require('./connection');

async function findAllProducts() {
  const [allProducts] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return allProducts;
}

async function findProductById(productId) {
  const [[foundProduct]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );
  return foundProduct;
}

module.exports = {
  findAllProducts,
  findProductById,
};