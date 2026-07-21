import type { ProjectContent } from '../schema';

export const theInfiniteDiscussionMetadata = {
  slug: 'the-infinite-discussion',
  title: 'The Infinite Discussion',
  path: '/work/infinite-discussion',
  eyebrow: 'Draft case study',
  category: 'Editorial & Visual Communication',
  leadQuestion: 'How can discussion be structured so multiple perspectives remain legible?',
  summary: 'An editorial and visual communication project exploring how multiple perspectives can remain distinct and legible within one structure.',
  contentStatus: 'draft',
  metadata: {
    category: 'Editorial & Visual Communication',
  },
  nextSlug: 'audi',
} satisfies Omit<ProjectContent, 'chapters'>;
