import Link from 'next/link';

const NewsItem = ({ params }) => {
  return (
    <>
      <h1>NewsItem {params.newsItemSlug}</h1>
    </>
  );
};

export default NewsItem;