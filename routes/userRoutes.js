const express = require("express");
const {
  listarUsuarios,
  criarUsuario,
  deletarUsuario,
} = require("../controllers/userController");

const router = express.Router();

// Endpoints
router.get("/", listarUsuarios);
router.post("/", criarUsuario);
router.delete("/:id", (req, res) => {
  deletarUsuario(req, res);
});

module.exports = router;
