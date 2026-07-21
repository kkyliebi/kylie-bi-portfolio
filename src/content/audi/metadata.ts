import type { ProjectContent } from '../schema';

export const audiMetadata = {
  slug: 'audi',
  title: 'Audi Integrated Brand Communication',
  path: '/work/audi',
  eyebrow: 'Draft case study',
  category: 'Automotive & Brand Communication',
  leadQuestion: 'How can a brand communication system connect strategy, production and experience?',
  summary: 'An integrated brand communication case study connecting strategy, creative production and audience experience.',
  contentStatus: 'draft',
  metadata: {
    category: 'Automotive & Brand Communication',
  },
  nextSlug: 'deear-magazine',
} satisfies Omit<ProjectContent, 'chapters'>;
