import Link from 'next/link';

const News = () => {
  return (
    <>
      <h1>News</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/first-news">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News Item</Link>
        </li>
      </ul>
    </>
  );
};

export default News;