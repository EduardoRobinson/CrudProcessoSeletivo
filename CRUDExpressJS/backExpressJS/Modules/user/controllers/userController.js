const userService = require('../services/userService');

// Obter todos os usuários
const getAllUsers = (req, res) => {
  const users = userService.getUsers();
  res.json(users);
};

// Criar um novo usuário
const createUser = (req, res) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json(newUser);
};

// Atualizar um usuário existente
const updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = userService.updateUser(id, req.body);
  
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

// Deletar um usuário
const deleteUser = (req, res) => {
  const { id } = req.params;
  const deletedUser = userService.deleteUser(id);

  if (deletedUser) {
    res.json({ message: 'Usuário deletado com sucesso' });
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
