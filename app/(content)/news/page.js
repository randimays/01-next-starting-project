import NewsList from '@/app/components/news-list';
import { getAllNews } from '@/app/lib/news';

const News = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News</h1>
      <NewsList news={news} />
    </>
  );
};

export default News;