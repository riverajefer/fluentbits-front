import { api } from './api';

export const addWordOrSentence = async (input: string) => {
  const response = await api.post('/api/generate', { input });
  return response.data;
};
