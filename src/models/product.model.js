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

async function registerProduct(productName) {
  const [newProduct] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [productName],
  );

  const registeredProduct = await findProductById(newProduct.insertId);
  
  return registeredProduct;
}

async function updateProduct(productId, updatedProduct) {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [updatedProduct, productId],
  );
}

async function deleteProduct(productId) {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [productId],
  );
}

module.exports = {
  findAllProducts,
  findProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
};