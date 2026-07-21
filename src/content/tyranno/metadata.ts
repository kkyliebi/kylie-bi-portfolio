import type { ProjectContent } from '../schema';

export const tyrannoMetadata = {
  slug: 'tyranno',
  title: 'TYRANNO',
  path: '/work/tyranno',
  eyebrow: 'Draft case study',
  category: 'Communication Design',
  leadQuestion: 'How can a complex subject become a clear and engaging communication experience?',
  summary: 'A communication-design case study about translating a complex subject into a clear and engaging experience.',
  contentStatus: 'draft',
  metadata: {
    category: 'Communication Design',
  },
  nextSlug: 'the-infinite-discussion',
} satisfies Omit<ProjectContent, 'chapters'>;
