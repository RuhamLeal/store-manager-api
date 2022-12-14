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
    date: '2022-11-18T01:27:05.000Z',
    productId: 2,
    quantity: 10,
  },
];

const date = '2022-11-17T18:05:36.000Z';

const allSales01 = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];

const saleError = [
  {
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleWithoutId = [
  {
    productId: 100,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleWithoutRightQuantity = [
  {
    productId: 100,
    quantity: 0,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const notfoundProduct = {
  status: 404,
  data: { message: 'Product not found' },
};

const notfoundSale = {
  status: 404,
  data: { message: 'Sale not found' },
};

const serviceError = {
  status: 400,
  data: { message: '"productId" is required' },
};

const serviceQuantityError = {
  status: 422,
  data: { message: '"quantity" must be greater than or equal to 1' },
};

const serviceSuccess = {
  status: 201,
  data: registeredSale,
};

module.exports = {
  sale,
  registeredSale,
  allSales,
  foundSale,
  wrongSale,
  updatedSale,
  salesUpdated,
  allSales01,
  saleError,
  saleWithoutId,
  saleWithoutRightQuantity,
  notfoundProduct,
  notfoundSale,
  serviceError,
  serviceQuantityError,
  serviceSuccess,
};