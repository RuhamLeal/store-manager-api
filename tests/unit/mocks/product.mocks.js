const product = {
  id: 1,
  name: 'Martelo de Thor',
};

const notfound = {
  message: 'Product not found',
};

const products = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const updatedProduct = {
  id: 1,
  name: 'Traje do pantera negra',
};


const newProduct = {
  name: 'Armadura do homem de ferro',
};

const newProductResponse = {
  id: 4,
  name: 'Armadura do homem de ferro',
};

const databaseError = {
  message: 'database internal ERROR',
};

module.exports = {
  products,
  notfound,
  newProduct,
  updatedProduct,
  newProductResponse,
  product,
  databaseError,
};