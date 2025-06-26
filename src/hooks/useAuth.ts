import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';
import { tokenStorage } from '../utils/auth';
import type { User, LoginCredentials, RegisterCredentials } from '../types/auth.ts';
import { ROUTES } from '../utils/constants';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!tokenStorage.get());
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const token = tokenStorage.get();
      if (token) {
        try {
          const userData = await authService.getCurrentUser();
          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          tokenStorage.remove();
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);
      const { user, token } = await authService.login(credentials);
      tokenStorage.set(token);
      setUser(user);
      setIsAuthenticated(true);
      navigate(ROUTES.DASHBOARD);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Error al iniciar sesión');
      setIsAuthenticated(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const register = async (credentials: RegisterCredentials) => {
    try {
      setLoading(true);
      setError(null);
      const { user, token } = await authService.register(credentials);
      tokenStorage.set(token);
      setUser(user);
      setIsAuthenticated(true);
      navigate(ROUTES.DASHBOARD);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Error al registrarse');
      setIsAuthenticated(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      tokenStorage.remove();
      setUser(null);
      setIsAuthenticated(false);
      navigate(ROUTES.HOME);
    }
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated,
  };
};
