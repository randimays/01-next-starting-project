import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

const News = () => {
  return (
    <>
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map(newsItem => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                alt={newsItem.title}
                src={`/images/news/${newsItem.image}`}
              />
              {newsItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default News;