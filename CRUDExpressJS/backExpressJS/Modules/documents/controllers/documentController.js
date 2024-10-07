const documentService = require('../services/documentService');

// Obter todos os documentos
const getAllDocuments = (req, res) => {
  const documents = documentService.getDocuments();
  res.json(documents);
};

// Criar um novo usuário
const createDocument = (req, res) => {
  const newDocument = documentService.createDocument(req.body);
  res.status(201).json(newDocument);
};

// Atualizar um usuário existente
const updateDocument = (req, res) => {
  const { id } = req.params;
  const updatedDocument = documentService.updateDocument(id, req.body);
  
  if (updatedDocument ) {
    res.json(updatedDocument);
  } else {
    res.status(404).json({ error: 'Documento não encontrado' });
  }
};

// Deletar um usuário
const deleteDocument = (req, res) => {
  const { id } = req.params;
  const deletedDocument = documentService.deleteDocument(id);

  if (deletedDocument) {
    res.json({ message: 'Documento deletado com sucesso' });
  } else {
    res.status(404).json({ error: 'Documento não encontrado' });
  }
};

module.exports = {
  getAllDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
};
