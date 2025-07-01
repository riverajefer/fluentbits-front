import { api } from './api';

export const getSpacedRepetitionsByWordId = async (id: string | number) => {
  const res = await api.get(`/my-words/${id}`);
  return res.data;
};

export const getAllVocabularyItems = async () => {
  const res = await api.get('/vocabulary-items');
  return res.data;
};
