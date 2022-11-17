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
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [productName],
  );
  return {
    id: insertId,
    name: productName,
  };
}

async function updateProduct(productId, productToUpdate) {
  const [response] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [productToUpdate, productId],
  );
  if (response.affectedRows === 0) return false;
  return {
    id: productId,
    name: productToUpdate,
  };
}

async function deleteProduct(productId) {
  const [response] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [productId],
  );
  if (response.affectedRows === 0) return false;
  return true;
}

module.exports = {
  findAllProducts,
  findProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
};