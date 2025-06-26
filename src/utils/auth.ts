import { STORAGE_KEYS } from './constants';

export const tokenStorage = {
  get: () => localStorage.getItem(STORAGE_KEYS.TOKEN),
  set: (token: string) => localStorage.setItem(STORAGE_KEYS.TOKEN, token),
  remove: () => localStorage.removeItem(STORAGE_KEYS.TOKEN),
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};