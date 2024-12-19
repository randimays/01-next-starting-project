import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '../components/news-list';

const News = () => {
  return (
    <>
      <h1>News</h1>
      <ul className="news-list">
        <NewsList news={DUMMY_NEWS} />
      </ul>
    </>
  );
};

export default News;