import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL da sua API Express
});

export const getDocuments = async () => {
    return api.get('/documents');
  };
  
  export const createDocument = async (documentData) => {
    return api.post('/documents', documentData);
  };
  
  export const updateDocument = async (id, documentData) => {
    return api.put(`/document/${id}`, documentData);
  };
  
  export const deleteDocument = async (id) => {
    return api.delete(`/document/${id}`);
  };
  
