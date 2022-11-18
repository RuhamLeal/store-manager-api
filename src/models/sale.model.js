const camelize = require('camelize');
const connection = require('./connection');

async function findAllSales() {
  const [sales] = await connection.execute(
    `SELECT SALEP.sale_id, SALE.date, SALEP.product_id, SALEP.quantity
    FROM StoreManager.sales_products AS SALEP
    INNER JOIN StoreManager.sales AS SALE
    ON SALEP.sale_id = SALE.id
    ORDER BY SALEP.sale_id`,
  );
  return camelize(sales);
}

async function findSaleById(saleId) {
  const [foundSale] = await connection.execute(
    `SELECT s.date, sp.product_id, sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    WHERE s.id = ?`, [saleId],
  );
  return camelize(foundSale);
}

async function registerSale(sales) {
  const date = new Date();
  const [newSale] = await connection.execute(
    `INSERT INTO StoreManager.sales (date)
      VALUE (?)`,
    [date.toDateString()],
  );

  const saleId = newSale.insertId;

  sales.forEach(async (sale) => {
    await connection.execute(
      `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
      VALUES (?, ?, ?)`,
      [saleId, sale.productId, sale.quantity],
    );
  });

  return {
    id: saleId,
    itemsSold: sales,
  };
}

async function deleteSale(saleId) {
  const [response] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [saleId],
  );
  if (response.affectedRows === 0) return false;
  return true;
}

module.exports = {
  findAllSales,
  findSaleById,
  registerSale,
  deleteSale,
};