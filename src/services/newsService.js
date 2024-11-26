import axios from 'axios';

// axios.defaults.withCredentials = true;

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchForxNews = async (query) => {
  const searchQuery = query || 'forex';

  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        q: searchQuery,
        apiKey: API_KEY,
        language: 'en',
      },
    });
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
