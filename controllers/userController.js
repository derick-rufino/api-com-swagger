const { getAllUsers, addUser, deleteUser } = require("../models/userModels");

function listarUsuarios(req, res) {
  const users = getAllUsers();
  res.json(users);
}

function criarUsuario(req, res) {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }
  const novo = addUser(nome);
  res.status(201).json(novo);
}

function deletarUsuario(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    // checar se é número
    return res.status(400).json({
      erro: "ID deve ser um número",
    });
  }

  const userRemovido = deleteUser(id);

  if (!userRemovido) {
    return res.status(404).json({
      erro: "Usuário não encontrado",
    });
  }

  res.json({
    mensagem: "Usuário removido",
    usuario: userRemovido,
  });
}

module.exports = { listarUsuarios, criarUsuario, deletarUsuario };
