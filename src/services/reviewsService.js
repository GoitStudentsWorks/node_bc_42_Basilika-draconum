import { publicAPI } from '../shared/http';

export const registerUserApi = async () => {
  const { data } = await publicAPI.get('/api/reviews');
  return data;
};
