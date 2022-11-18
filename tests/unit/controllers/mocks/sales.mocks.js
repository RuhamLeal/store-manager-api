const sale = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const updatedSale = [
  {
    productId: 1,
    quantity: 5,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const salesUpdated = {
  saleId: 1,
  itemsUpdated: [
    {
      productId: 1,
      quantity: 5,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const wrongSale = [
  {
    productId: 999,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const registeredSale = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const allSales = [
  {
    saleId: 1,
    date: '2022-11-18T01:27:05.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 2,
    date: '2022-11-18T01:27:05.000Z',
    productId: 3,
    quantity: 15,
  },
];

const foundSale = [
  {
    date: '2022-11-18T01:27:05.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: Date('2022-11-18T01:27:05.000Z'),
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  sale,
  registeredSale,
  allSales,
  foundSale,
  wrongSale,
  updatedSale,
  salesUpdated,
};
