const Document = require('../models/documentModel');

let documents = [];  // Array em memória para armazenar os usuários
let currentId = 1;

const getDocuments = () =>{
    return documents;
};

const createDocument = (documentData) =>{
    const newDocument = new Document(currentId++,documentData.name,documentData.status,documentData.userId)
    documents.push(newDocument);
    return newDocument;
};

const updateDocument = (id, documentData) => {
    const documentIndex = documents.findIndex(document => document.id === parseInt(id));
    if (documentIndex === -1) return null;
  
    documents[documentIndex].name = documentData.name;
    documents[documentIndex].status = documentData.status;
    return documents[documentIndex];
  };
  
  const deleteDocument = (id) => {
    const documentIndex = documents.findIndex(document => document.id === parseInt(id));
    if (documentIndex === -1) return null;
  
    const deletedDocument = documents.splice(documentIndex, 1); // Remove do array
    return deletedDocument[0];  // Retorna o usuário deletado
  };
  
  module.exports = {
    getDocuments,
    createDocument,
    updateDocument,
    deleteDocument,
  };
  