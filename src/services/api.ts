import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import { tokenStorage } from '../utils/auth';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000, // 120 segundos
});

// Interceptor para agregar token automáticamente
api.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Only redirect if not already on the login page to prevent redirect loops
      if (!window.location.pathname.includes('/login')) {
        tokenStorage.remove();
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);