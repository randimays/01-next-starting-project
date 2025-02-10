'use client';

import NewsList from '@/app/components/news-list';
import { useEffect, useState } from 'react';

const News = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);

      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError('Failed to fetch news.');
      }

      setIsLoading(false);

      const news = await response.json();
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News</h1>
      {newsContent}
    </>
  );
};

export default News;