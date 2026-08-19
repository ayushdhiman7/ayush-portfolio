import PageBackTitle from '@/components/common/PageBackTitle';
import SetupContent from '@/components/setup/SetupContent';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/setup'),
};

export default function SetupPage() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <PageBackTitle href="/#about-me">VS Code / Cursor Setup</PageBackTitle>
        <SetupContent />
      </div>
    </main>
  );
}
