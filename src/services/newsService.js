import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchForxNews = async (query) => {
  const searchQuery = query || 'forex';

  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        query: searchQuery,
        language: 'en',
      },
    });
    return data.articles || [];
  } catch (error) {
    console.error(
      'Error fetching news:',
      error.response ? error.response.data : error.message
    );
    return [];
  }
};
