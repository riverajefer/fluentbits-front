import { api } from './api';

export const addWordOrSentence = async (input: string) => {
  const response = await api.post('/generate', { input });
  return response.data;
};
