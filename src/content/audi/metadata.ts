import type { ProjectContent } from '../schema';

export const audiMetadata = {
  slug: 'audi',
  title: 'Audi Integrated Brand Communication',
  path: '/work/audi',
  eyebrow: 'Project placeholder',
  category: 'Automotive & Brand Communication',
  leadQuestion: 'How can a brand communication system connect strategy, production and experience?',
  summary: 'A placeholder summary for the future Audi Integrated Brand Communication case narrative.',
  metadata: {
    category: 'Automotive & Brand Communication',
  },
  nextSlug: 'deear-magazine',
} satisfies Omit<ProjectContent, 'chapters'>;
