import { skills } from '@/config/Skills';
import React from 'react';

import SectionTitle from '../common/SectionTitle';
import Skill from '../common/Skill';

export default function Skills() {
  return (
    <section className="pb-10">
      <SectionTitle>Skills & Technologies</SectionTitle>
      <div className="flex flex-wrap justify-center gap-2 px-6 pt-6">
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} href={skill.href}>
            {skill.icon}
          </Skill>
        ))}
      </div>
    </section>
  );
}
