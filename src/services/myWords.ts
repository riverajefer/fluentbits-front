import { api } from './api';

export const getSpacedRepetitionsByWordId = async (id: string | number) => {
  const res = await api.get(`/api/my-words/${id}`);
  return res.data;
};

export const getAllVocabularyItems = async () => {
  const res = await api.get('/api/vocabulary-items');
  return res.data;
};
