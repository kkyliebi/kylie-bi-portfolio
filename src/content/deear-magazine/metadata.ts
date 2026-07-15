import type { ProjectContent } from '../schema';

export const deearMagazineMetadata = {
  slug: 'deear-magazine',
  title: 'Deear Magazine',
  path: '/work/deear',
  eyebrow: 'Project placeholder',
  category: 'Publishing & Creative Production',
  leadQuestion: 'How can editorial structure turn a creative point of view into a repeatable publication system?',
  summary: 'A placeholder summary for the future Deear Magazine case narrative.',
  metadata: {
    category: 'Publishing & Creative Production',
  },
  nextSlug: 'madam-in-eden-im-adam',
} satisfies Omit<ProjectContent, 'chapters'>;
