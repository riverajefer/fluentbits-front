import { api } from './api';

export const addWordOrSentence = async (input: string, mode: 'english' | 'custom' = 'english') => {
  const response = await api.post('/generate', { input, mode });
  return response.data;
};
