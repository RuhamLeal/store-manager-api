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

const updatedProductMock = [{
  id: 1,
  name: "Armadura do homem de ferro",
}];

const newProduct = {
  name: "Armadura do homem de ferro"
};

const newProductResponse = {
  id: 4,
  name: "Armadura do homem de ferro"
};

module.exports = {
  products,
  newProduct,
  newProductResponse,
  updatedProductMock,
};