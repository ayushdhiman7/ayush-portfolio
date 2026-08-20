export interface Testimonial {
  name: string;
  username: string;
  body: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Verma',
    username: 'Senior Frontend Engineer @ Zeta',
    body: 'Clean, well-typed React and TypeScript throughout. He builds interfaces that are fast, accessible, and actually maintainable — the kind of frontend work you can hand off and trust.',
  },
  {
    name: 'Sneha Gupta',
    username: 'Product Manager @ Razorpay',
    body: 'Reliable engineer who turns messy requirements into clean, shippable features. He communicates clearly, owns his work end to end, and never hand-waves the hard parts of full-stack development.',
  },
  {
    name: 'Arjun Nair',
    username: 'Backend Engineer @ PhonePe',
    body: 'Solid Node.js and API work — well-structured routes, sane validation, and queries that stay fast under load. He understands how the backend serves the product, not just how it runs.',
  },
  {
    name: 'Vikram Singh',
    username: 'Full Stack Lead @ Swiggy',
    body: 'Comfortable across the whole stack — React on the front, Laravel and MySQL behind it. He ships thoughtfully, writes SQL that scales, and explains tradeoffs with refreshing clarity.',
  },
  {
    name: 'Kavya Reddy',
    username: 'Engineering Manager @ CRED',
    body: 'He owns features end to end and moves fast without cutting corners — from polished Vue and React interfaces to dependable Node and PHP backends. Watching his ownership and pace was genuinely impressive.',
  },
];
