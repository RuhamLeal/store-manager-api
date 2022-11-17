const product = {
  id: 1,
  name: "Martelo de Thor"
}

const newProduct = {
  id: 4,
  name: "Armadura do homem de ferro"
}

const updatedProduct = {
  id: 1,
  name: 'Traje do homem aranha',
}

const products = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
]

const databaseError = {
  message: 'database internal ERROR',
}

const serverError = {
  message: 'server error',
}


const notFound = {
  message: "Product not found"
}

module.exports = {
  products,
  product,
  notFound,
  databaseError,
  serverError,
  newProduct,
  updatedProduct,
};