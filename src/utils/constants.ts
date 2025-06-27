export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user_data',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  DASHBOARD: '/api/dashboard',
  PROFILE: '/api/profile',
} as const;
