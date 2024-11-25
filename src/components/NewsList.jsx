import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { fetchForxNews } from '../services/newsService';

const NewsList = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const newsData = await fetchForxNews(query);
        setArticles(newsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [query]);

  return (
    <div className="news-list flex flex-wrap justify-center gap-8 py-10 lg:mt-36 mt-28 w-full">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      ) : (
        <p>No news found for this search.</p>
      )}
    </div>
  );
};

export default NewsList;
