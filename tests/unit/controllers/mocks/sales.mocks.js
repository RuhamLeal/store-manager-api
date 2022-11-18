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

const wrongSale = [
  {
    productId: 999,
    quantity: 1
  },
  {
    productId: 2,
    quantity: 5
  }
]

const registeredSale = {
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

const allSales = [
  {
    saleId: 1,
    date: '2022-11-18T00:58:22.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 2,
    date: '2022-11-18T00:58:22.000Z',
    productId: 3,
    quantity: 15
  }
]

const foundSale = [
  {
    date: "2022-11-18T00:58:22.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2022-11-18T00:58:22.000Z",
    productId: 2,
    quantity: 10
  }
]

module.exports = { sale, registeredSale, allSales, foundSale, wrongSale };
