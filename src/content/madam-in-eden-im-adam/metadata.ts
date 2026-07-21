import type { ProjectContent } from '../schema';

export const madamInEdenImAdamMetadata = {
  slug: 'madam-in-eden-im-adam',
  title: "Madam, in Eden, I'm Adam",
  path: '/work/madam-in-eden',
  eyebrow: 'Draft case study',
  category: 'Concept Development',
  leadQuestion: 'How can language, identity and form create a coherent conceptual experience?',
  summary: 'A concept-development case study exploring how language, identity and form can become one coherent experience.',
  contentStatus: 'draft',
  metadata: {
    category: 'Concept Development',
  },
  nextSlug: 'tyranno',
} satisfies Omit<ProjectContent, 'chapters'>;
