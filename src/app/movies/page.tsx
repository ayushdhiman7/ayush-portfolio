import MoviesGrid from '@/components/movies/MoviesGrid';
import PageBackTitle from '@/components/common/PageBackTitle';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/movies'),
};

export default function MoviesPage() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <PageBackTitle href="/#about-me">Movies/Shows</PageBackTitle>
        <MoviesGrid />
      </div>
    </main>
  );
}
