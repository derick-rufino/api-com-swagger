// Simulando um banco de dados na memória
const users = [{ id: 1, nome: "Aluno" }];

function getAllUsers() {
  return users;
}

function addUser(nome) {
  const novo = { id: users.length + 1, nome };
  users.push(novo);
  return novo;
}

function deleteUser(id) {
  // usa o id para buscar e remover - através da url
  const indice = users.findIndex((user) => user.id === id); // método array
  if (indice === -1) {
    return null;
  }
  return users.splice(indice, 1)[0];
}

module.exports = { getAllUsers, addUser, deleteUser };
