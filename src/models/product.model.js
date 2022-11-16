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

async function updateProduct(productId, productToUpdate) {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [productToUpdate, productId],
  );
  const updatedProduct = await findProductById(productId);
  return updatedProduct;
}

async function deleteProduct(productId) {
  const productToDelete = await findProductById(productId);
  if (productToDelete) {
    await connection.execute(
      'DELETE FROM StoreManager.products WHERE id = ?', [productId],
    );
    return true;
  }
  return false;
}

module.exports = {
  findAllProducts,
  findProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
};