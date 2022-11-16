const connection = require('./connection');

async function findAllSales() {
  const [sales] = await connection.execute(
    `SELECT SALEP.sale_id, SALE.date, SALEP.product_id, SALEP.quantity
    FROM StoreManager.sales_products AS SALEP
    INNER JOIN StoreManager.sales AS SALE
    ON SALEP.sale_id = SALE.id
    ORDER BY SALEP.sale_id`,
  );
  return sales;
}

async function findSaleById(saleId) {
  const [foundSale] = await connection.execute(
    `SELECT SALE.date, SALEP.product_id, SALEP.quantity
    FROM StoreManager.sales_products AS SALEP
    INNER JOIN StoreManager.sales AS SALE
    ON SALEP.sale_id = SALE.id
    WHERE SALE.id = ?`, [saleId],
  );
  return foundSale;
}

async function registerSale(sales) {
  const [newSale] = await connection.execute(
    `INSERT INTO StoreManager.sales (date)
      VALUE (?)`,
    [new Date()],
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

module.exports = {
  findAllSales,
  findSaleById,
  registerSale,
};