import axios from 'axios';

export const fetchForxNews = async (query) => {
  try {
    const { data } = await axios.get(import.meta.env.VITE_BASE_URL, {
      params: {
        q: query || 'forex',
        language: 'en',
        apiKey: import.meta.env.VITE_API_KEY,
      },
    });
    return data.articles;
  } catch (error) {
    console.log('Error fetching news:', error);
    return [];
  }
};
