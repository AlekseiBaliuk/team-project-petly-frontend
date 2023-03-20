import axios from 'axios';

axios.defaults.baseURL = 'https://team-project-petly-backend.onrender.com/api';

export const getNews = async () => {
  const response = await axios.get('news');
  return response.data.news;
};
