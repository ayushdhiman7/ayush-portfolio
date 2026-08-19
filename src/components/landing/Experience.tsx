'use client';

import { type Experience, experiences } from '@/config/Experience';
import React from 'react';

import SectionTitle from '../common/SectionTitle';
import InlineExperienceCard from './InlineExperienceCard';

export default function Experience() {
  return (
    <section className="pb-10">
      <SectionTitle>Experiences</SectionTitle>
      <div className="flex w-full flex-col px-6 pt-6">
        {experiences.map((experience: Experience) => (
          <InlineExperienceCard
            key={experience.company}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}
