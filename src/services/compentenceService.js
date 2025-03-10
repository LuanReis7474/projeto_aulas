import api from './apiService';

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};