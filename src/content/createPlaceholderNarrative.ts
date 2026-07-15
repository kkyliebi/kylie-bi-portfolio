import type { ProjectChapter, ProjectMedia } from './schema';

type PlaceholderNarrativeOptions = {
  projectSlug: string;
  conceptMediaKind?: ProjectMedia['kind'];
  outcomeMediaKind?: ProjectMedia['kind'];
};

export function createPlaceholderNarrative({
  projectSlug,
  conceptMediaKind = 'archive',
  outcomeMediaKind = 'gallery',
}: PlaceholderNarrativeOptions): ProjectChapter[] {
  return [
    {
      id: 'context',
      title: 'Context',
      eyebrow: '01 Context',
      body: [
        'Establish the situation, audience, constraints and strategic conditions.',
        'Context placeholder content will be defined when the individual case narrative is written.',
      ],
    },
    {
      id: 'research',
      title: 'Research',
      eyebrow: '02 Research',
      body: [
        'Surface the references, insights and evidence that shaped the direction.',
        'Research placeholder content will be defined when the individual case narrative is written.',
      ],
      media: [
        {
          id: `${projectSlug}-research-landscape`,
          kind: 'research',
          layout: 'landscape',
          caption: 'Landscape research image placeholder.',
        },
        {
          id: `${projectSlug}-research-portrait`,
          kind: 'research',
          layout: 'portrait',
          caption: 'Portrait research image placeholder.',
        },
      ],
    },
    {
      id: 'conceptDevelopment',
      title: 'Concept Development',
      eyebrow: '03 Concept Development',
      body: [
        'Translate research into a clear concept, narrative logic and visual approach.',
        'Concept Development placeholder content will be defined when the individual case narrative is written.',
      ],
      media: [
        {
          id: `${projectSlug}-concept-full-width`,
          kind: conceptMediaKind,
          layout: 'fullWidth',
          caption: 'Full-width concept image placeholder.',
        },
      ],
    },
    {
      id: 'designProcess',
      title: 'Process',
      eyebrow: '04 Process',
      body: [
        'Show how the work was structured, tested, refined and made realisable.',
        'Process placeholder content will be defined when the individual case narrative is written.',
      ],
    },
    {
      id: 'finalOutcome',
      title: 'Outcome',
      eyebrow: '05 Outcome',
      body: [
        'Describe the final communication system, artifact or experience.',
        'Outcome placeholder content will be defined when the individual case narrative is written.',
      ],
      media: [
        {
          id: `${projectSlug}-outcome-landscape`,
          kind: outcomeMediaKind,
          layout: 'landscape',
          caption: 'Landscape outcome image placeholder.',
        },
      ],
    },
    {
      id: 'reflection',
      title: 'Reflection',
      eyebrow: '06 Reflection',
      body: [
        'Record what the project clarified and how it informs future work.',
        'Reflection placeholder content will be defined when the individual case narrative is written.',
      ],
    },
  ];
}
