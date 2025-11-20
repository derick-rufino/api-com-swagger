// Simulando um banco de dados na memória para produtos
const products = [{ id: 1, nome: "Produto Exemplo" }];

function getAllProducts() {
  return products;
}

function addProduct(nome) {
  const novo = { id: products.length + 1, nome };
  products.push(novo);
  return novo;
}

function deleteProduct(id) {
  const indice = products.findIndex((p) => p.id === id);
  if (indice === -1) return null;
  return products.splice(indice, 1)[0];
}

module.exports = { getAllProducts, addProduct, deleteProduct };
