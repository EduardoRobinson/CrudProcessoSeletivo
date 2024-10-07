const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');


router.get('/',documentController.getAllDocuments); //seleciona todos os documentos
router.post('/',documentController.createDocument); //cria um documento
router.put('/:id',documentController.updateDocument); // atualiza um documento
router.delete('/:id',documentController.deleteDocument); //deleta um documento

module.exports = router;