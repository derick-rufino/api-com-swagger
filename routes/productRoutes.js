const express = require("express");
const { listarProdutos, criarProduto, deletarProduto } = require("../controllers/productController");

const router = express.Router();

// Endpoints
router.get("/", listarProdutos);
router.post("/", criarProduto);
router.delete("/:id", deletarProduto);

module.exports = router;
