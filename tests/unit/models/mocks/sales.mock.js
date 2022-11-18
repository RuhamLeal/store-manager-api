const salesSold = {
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

const sale = [
  {
    productId: 1,
    quantity: 1
  },
  {
    productId: 2,
    quantity: 5
  }
]

const updatedSale = [
  {
    productId: 1,
    quantity: 5,
  },
  {
    productId: 2,
    quantity: 5,
  }
]

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
    }
  ]
}

const allSales = [
  {
    saleId: 1,
    date: "2022-11-17T18:05:36.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2022-11-17T18:05:36.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2022-11-17T18:05:36.000Z",
    productId: 3,
    quantity: 15
  }
]

const saleResponse = [
  {
    date: "2022-11-17T18:05:36.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2022-11-17T18:05:36.000Z",
    productId: 2,
    quantity: 10
  }
]

module.exports = {
  salesSold,
  sale,
  allSales,
  saleResponse,
  updatedSale,
  salesUpdated,
};