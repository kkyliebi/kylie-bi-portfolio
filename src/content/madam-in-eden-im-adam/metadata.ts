import type { ProjectContent } from '../schema';

export const madamInEdenImAdamMetadata = {
  slug: 'madam-in-eden-im-adam',
  title: "Madam, in Eden, I'm Adam",
  path: '/work/madam-in-eden',
  eyebrow: 'Project placeholder',
  category: 'Concept Development',
  leadQuestion: 'How can language, identity and form create a coherent conceptual experience?',
  summary: "A placeholder summary for the future Madam, in Eden, I'm Adam case narrative.",
  metadata: {
    category: 'Concept Development',
  },
  nextSlug: 'tyranno',
} satisfies Omit<ProjectContent, 'chapters'>;
