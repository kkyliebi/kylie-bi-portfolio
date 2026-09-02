import type { ProjectContent } from '../schema';

export const tyrannoMetadata = {
  slug: 'tyranno',
  title: 'TYRANNO',
  subtitle: 'A speculative typeface for interspecies communication between humans and T. rex',
  path: '/work/tyranno',
  eyebrow: 'Speculative communication design',
  year: '2025',
  category: 'Speculative Communication Design',
  role: 'Concept Development · Visual Communication · Interaction Design',
  leadQuestion: 'How might humans communicate with a species that does not share human language?',
  summary:
    'TYRANNO imagines a 2050 scenario in which humans and T. rex must coexist. Drawing on semiotics, typography and behavioural research, the project translates posture, movement and gesture into a symbolic communication system expressed through glyphs, animation and an interactive web experience.',
  contentStatus: 'draft',
  metadata: {
    year: '2025',
    category: 'Speculative Communication Design',
    role: 'Concept Development · Visual Communication · Interaction Design',
  },
  nextSlug: 'the-infinite-discussion',
} satisfies Omit<ProjectContent, 'chapters'>;
