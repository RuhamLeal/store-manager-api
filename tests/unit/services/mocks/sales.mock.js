const saleRegistered = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1
    },
    {
      productId: 2,
      quantity: 5
    }
  ]
}

const saleService = [
  {
    productId: 1,
    quantity: 1
  },
  {
    productId: 2,
    quantity: 5
  }
]

const saleError = [
  {
    quantity: 1
  },
  {
    productId: 2,
    quantity: 5
  }
]

const saleWithoutId = [
  {
    productId: 100,
    quantity: 1
  },
  {
    productId: 2,
    quantity: 5
  }
]

const saleWithoutRightQuantity = [
  {
    productId: 100,
    quantity: 0,
  },
  {
    productId: 2,
    quantity: 5,
  }
]

const notfound = {
  status: 404,
  data: { message: 'Product not found'}
}

const notfoundSale = {
  status: 404,
  data: { message: 'Sale not found' }
}

const serviceError = {
  status: 400,
  data: { message: '"productId" is required'}
}

const serviceQuantityError = {
  status: 422,
  data: { message: '"quantity" must be greater than or equal to 1' }
}

const serviceSuccess = {
  status: 201,
  data: saleRegistered,
}

const allSales = [
  {
    saleId: 1,
    date: "2022-10-13T18:05:36.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2022-10-13T18:05:36.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2022-10-13T18:05:36.000Z",
    productId: 3,
    quantity: 15
  }
]

const saleId = [
  {
    date: "2022-10-13T18:05:36.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2022-10-13T18:05:36.000Z",
    productId: 2,
    quantity: 10
  }
]

module.exports = {
  saleRegistered,
  saleService,
  saleId,
  allSales,
  serviceSuccess,
  serviceError,
  notfound,
  saleWithoutId,
  saleError,
  notfoundSale,
  serviceQuantityError,
  saleWithoutRightQuantity,
};