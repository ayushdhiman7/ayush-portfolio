import { aboutMeItems } from '@/config/AboutMe';
import React from 'react';

import AboutMeCard from '../common/AboutMeCard';
import SectionTitle from '../common/SectionTitle';

export default function AboutMe() {
  return (
    <section id="about-me" className="scroll-mt-24 pb-10">
      <SectionTitle>About Me</SectionTitle>
      <div className="flex flex-col gap-2 px-6 pt-6">
        {aboutMeItems.map((item) => (
          <AboutMeCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
            external={item.external}
          />
        ))}
      </div>
    </section>
  );
}
