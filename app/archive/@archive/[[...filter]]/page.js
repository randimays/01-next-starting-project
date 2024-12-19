import NewsList from '@/app/components/news-list';
import Link from 'next/link';
import { getAvailableNewsYears, getNewsForYear } from '@/app/lib/news';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);
  // const news = getNewsForYear(newsYear);
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => (
            <li key={link}>
              <Link href={`/archive/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}