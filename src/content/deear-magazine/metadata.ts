import type { ProjectContent } from '../schema';

export const deearMagazineMetadata = {
  slug: 'deear-magazine',
  title: 'Deear Magazine',
  path: '/work/deear',
  eyebrow: 'Draft case study',
  category: 'Publishing & Creative Production',
  leadQuestion: 'How can editorial structure turn a creative point of view into a repeatable publication system?',
  summary: 'A publishing and creative-production case study about turning an editorial point of view into a repeatable magazine system.',
  contentStatus: 'draft',
  metadata: {
    category: 'Publishing & Creative Production',
  },
  nextSlug: 'madam-in-eden-im-adam',
} satisfies Omit<ProjectContent, 'chapters'>;
