const User = require('../models/userModel');

let users = [];  // Array em memória para armazenar os usuários
let currentId = 1; // Para gerar IDs únicos

const getUsers = () => {
  return users;
};

const createUser = (userData) => {
  const newUser = new User(currentId++, userData.name, userData.email);
  users.push(newUser);
  return newUser;
};

const updateUser = (id, userData) => {
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) return null;

  users[userIndex].name = userData.name;
  users[userIndex].email = userData.email;
  return users[userIndex];
};

const deleteUser = (id) => {
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) return null;

  const deletedUser = users.splice(userIndex, 1); // Remove do array
  return deletedUser[0];  // Retorna o usuário deletado
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
