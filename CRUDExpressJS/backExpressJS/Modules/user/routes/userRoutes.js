const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers); //seleciona os usuarios
router.post('/', userController.createUser); //cria um usuario
router.put('/:id', userController.updateUser); //atualiza os dados de um usuario
router.delete('/:id',userController.deleteUser); // deleta um usuario

module.exports = router;