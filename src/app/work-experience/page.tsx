import SectionTitle from '@/components/common/SectionTitle';
import InlineExperienceCard from '@/components/landing/InlineExperienceCard';
import { experiences } from '@/config/Experience';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/work-experience');

export default function WorkExperiencePage() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <SectionTitle>Experiences</SectionTitle>
        <div className="space-y-2 px-6 pt-4 pb-12">
          <p className="text-muted-foreground text-sm">
            My work experiences across different companies and roles.
          </p>
          <div className="flex w-full flex-col pt-4">
            {experiences.map((experience) => (
              <InlineExperienceCard
                key={experience.company}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
