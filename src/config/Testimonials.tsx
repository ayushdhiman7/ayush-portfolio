export interface Testimonial {
  name: string;
  username: string;
  body: string;
  profile: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ajeet Singh Rajpoot',
    username: 'Associate Product Manager @ EmulateAI',
    body: 'What stood out most was how quickly he picked up AI agents and RAG pipelines after starting on frontend. He took ownership of hard problems without waiting to be asked, and the execution always matched the curiosity.',
    profile:
      'https://media.licdn.com/dms/image/v2/D4D03AQGbiioh7StnqA/profile-displayphoto-crop_800_800/B4DZfhA02MHkAM-/0/1751826780626?e=1787788800&v=beta&t=jaGCsMTf3-y0F438gAEnas6GCCyYqQWzLiu2DRJWkQg',
  },
  {
    name: 'Mithlesh Upadhyay',
    username: 'Senior Software Engineer',
    body: 'Reliable teammate who communicates clearly and stays calm when things get messy. He owns his work, helps others without drama, and brings a genuinely positive energy to tough problems.',
    profile:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces',
  },
  {
    name: 'Abhishek Gurjar',
    username: 'AI Engineer @ Avaya',
    body: 'Few engineers balance product sense and deep technical skill this well. His LLM integrations and agent workflows felt production-ready, not demo-ware, and he explained tradeoffs with unusual clarity.',
    profile:
      'https://media.licdn.com/dms/image/v2/D4D03AQHBFCTFA-8VeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715140328974?e=1787788800&v=beta&t=VHby8XpATZHAkw0n7Fp4Dtdcb-4BWxrZFM0BRcuYifs',
  },
  {
    name: 'Anup Sharma',
    username: 'Software Engineer @ Nutanix',
    body: 'Clean code, sharp questions, and features that survive real usage. Collaborating with him was easy because he ships thoughtfully and never hand-waves the hard parts of full-stack work.',
    profile:
      'https://media.licdn.com/dms/image/v2/D5603AQFGDiU9nxXErg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690369343479?e=1787788800&v=beta&t=lTOqgIC4gtnem5btg-CND9sk1f0sWfH3_OpFMyYOaUw',
  },
  {
    name: 'Jitendra Chauhan',
    username: 'Founder & CTO @ Detoxio AI',
    body: 'At Detoxio he owned features end to end and moved fast without cutting corners. Watching him grow into AI systems work with that much ownership and pace was genuinely impressive.',
    profile:
      'https://media.licdn.com/dms/image/v2/D5603AQEuXm2gKA0STw/profile-displayphoto-shrink_800_800/B56ZZ8JUr7GQAg-/0/1745839542843?e=1787788800&v=beta&t=ZyBYgWh6alvrlYhA-8gE_pIRPOpiEJwiVB1FAbbASwk',
  },
];
