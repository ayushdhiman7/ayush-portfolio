import { heroConfig } from '@/config/Hero';

export const parseTemplate = (
  template: string,
  skills: typeof heroConfig.skills,
) => {
  const parts = template.split(/(\{skills:\d+\}|<b>(?:[^<]|<(?!\/b>))*<\/b>)/);

  return parts
    .map((part, index) => {
      const skillMatch = part.match(/\{skills:(\d+)\}/);
      if (skillMatch) {
        const skillIndex = parseInt(skillMatch[1]);
        const skill = skills[skillIndex];
        if (skill) {
          return {
            type: 'skill',
            skill: skill,
            key: index,
          };
        }
      }

      if (part.startsWith('<b>') && part.endsWith('</b>')) {
        const content = part.slice(3, -4);
        // Check if content has a skill placeholder
        const innerSkillMatch = content.match(/\{skills:(\d+)\}/);
        if (innerSkillMatch) {
          const skillIndex = parseInt(innerSkillMatch[1]);
          const skill = skills[skillIndex];
          if (skill) {
            return {
              type: 'skill',
              skill: skill,
              key: index,
              bold: true,
            };
          }
        }
        return {
          type: 'bold',
          text: content,
          key: index,
        };
      }

      if (part.trim()) {
        return {
          type: 'text',
          text: part,
          key: index,
        };
      }
      return null;
    })
    .filter(Boolean);
};

export const parseBoldText = (text: string) => {
  const parts = text.split(/(<b>.*?<\/b>)/);
  return parts.map((part, index) => {
    if (part.startsWith('<b>') && part.endsWith('</b>')) {
      return {
        text: part.slice(3, -4),
        bold: true,
        key: index,
      };
    }
    return {
      text: part,
      bold: false,
      key: index,
    };
  });
};
