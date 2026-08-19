import PageBackTitle from '@/components/common/PageBackTitle';
import GearsContent from '@/components/gears/GearsContent';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/gears'),
};

export default function GearsPage() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <PageBackTitle href="/#about-me">Gears Used</PageBackTitle>
        <GearsContent />
      </div>
    </main>
  );
}
