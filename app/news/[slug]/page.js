import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

const NewsItem = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);
  
  return (
    <article className="news-article">
      <header>
        <img
          alt={newsItem.title}
          src={`/images/news/${newsItem.image}`}
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsItem;