import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Görevin belirttiği gibi "Bearer" öneki eklenmeden doğrudan token atanır
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;