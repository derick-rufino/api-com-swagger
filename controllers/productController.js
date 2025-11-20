const {
  getAllProducts,
  addProduct,
  deleteProduct,
} = require("../models/productModel");

function listarProdutos(req, res) {
  const products = getAllProducts();
  res.json(products);
}

function criarProduto(req, res) {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }
  const novo = addProduct(nome);
  res.status(201).json(novo);
}

function deletarProduto(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ erro: "ID deve ser um número" });
  }

  const productRemovido = deleteProduct(id);

  if (!productRemovido) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  res.json({ mensagem: "Produto removido", produto: productRemovido });
}

module.exports = { listarProdutos, criarProduto, deletarProduto };
