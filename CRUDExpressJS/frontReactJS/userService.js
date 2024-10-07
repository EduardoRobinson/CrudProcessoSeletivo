import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL da sua API Express
});

export const getUsers = async () => {
  return api.get('/users');
};

export const createUser = async (userData) => {
  return api.post('/users', userData);
};

export const updateUser = async (id, userData) => {
  return api.put(`/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  return api.delete(`/users/${id}`);
};