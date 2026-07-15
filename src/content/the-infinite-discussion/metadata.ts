import type { ProjectContent } from '../schema';

export const theInfiniteDiscussionMetadata = {
  slug: 'the-infinite-discussion',
  title: 'The Infinite Discussion',
  path: '/work/infinite-discussion',
  eyebrow: 'Project placeholder',
  category: 'Editorial & Visual Communication',
  leadQuestion: 'How can discussion be structured so multiple perspectives remain legible?',
  summary: 'A placeholder summary for the future The Infinite Discussion case narrative.',
  metadata: {
    category: 'Editorial & Visual Communication',
  },
  nextSlug: 'audi',
} satisfies Omit<ProjectContent, 'chapters'>;
