import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = (payload) => apiClient.post('/login', payload).then((response) => response.data);
export const register = (payload) => apiClient.post('/register', payload).then((response) => response.data);
