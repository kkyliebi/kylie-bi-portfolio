import type { ProjectChapter, ProjectMedia } from './schema';

type DraftNarrativeOptions = {
  projectSlug: string;
  projectTitle: string;
  category: string;
  leadQuestion: string;
  communicationFocus: string;
  conceptMediaKind?: ProjectMedia['kind'];
  outcomeMediaKind?: ProjectMedia['kind'];
};

export function createDraftNarrative({
  projectSlug,
  projectTitle,
  category,
  leadQuestion,
  communicationFocus,
  conceptMediaKind = 'archive',
  outcomeMediaKind = 'gallery',
}: DraftNarrativeOptions): ProjectChapter[] {
  return [
    {
      id: 'context',
      title: 'Context',
      eyebrow: '01 Context',
      body: [
        `${projectTitle} is framed as a ${category.toLowerCase()} project concerned with a central question: ${leadQuestion}`,
        `This draft positions the project around ${communicationFocus}. The original situation, audience and constraints still require verification.`,
      ],
    },
    {
      id: 'research',
      title: 'Research',
      eyebrow: '02 Research',
      body: [
        `The research chapter should reveal the references, relationships and evidence used to investigate ${communicationFocus}.`,
        'The repository establishes research as the beginning of the method, but it does not yet identify the sources, participants or findings used in this project.',
      ],
      media: [
        {
          id: `${projectSlug}-research-landscape`,
          kind: 'research',
          layout: 'landscape',
          caption: 'TODO — Add verified landscape research material, caption and alt text.',
        },
        {
          id: `${projectSlug}-research-portrait`,
          kind: 'research',
          layout: 'portrait',
          caption: 'TODO — Add verified portrait research material, caption and alt text.',
        },
      ],
    },
    {
      id: 'conceptDevelopment',
      title: 'Concept Development',
      eyebrow: '03 Concept Development',
      body: [
        `The concept-development narrative can show how research was translated into a legible idea for ${projectTitle}.`,
        `The inferred emphasis is not a single visual outcome, but the narrative logic connecting the project's question to a coherent communication approach.`,
      ],
      media: [
        {
          id: `${projectSlug}-concept-full-width`,
          kind: conceptMediaKind,
          layout: 'fullWidth',
          caption: 'TODO — Add verified concept-development material, caption and alt text.',
        },
      ],
    },
    {
      id: 'designProcess',
      title: 'Process',
      eyebrow: '04 Process',
      body: [
        'The process chapter can document how the concept moved through structure, testing, iteration and production.',
        `For this draft, the process is framed as the work of making ${communicationFocus} understandable and realisable; specific methods and iterations remain to be verified.`,
      ],
    },
    {
      id: 'finalOutcome',
      title: 'Outcome',
      eyebrow: '05 Outcome',
      body: [
        `The outcome should be presented as a communication system shaped by the project's question, rather than as an isolated visual artifact.`,
        `The existing content model suggests a resolved ${outcomeMediaKind} presentation, but the exact deliverables, format and public context are not documented.`,
      ],
      media: [
        {
          id: `${projectSlug}-outcome-landscape`,
          kind: outcomeMediaKind,
          layout: 'landscape',
          caption: 'TODO — Add verified outcome material, caption and alt text.',
        },
      ],
    },
    {
      id: 'reflection',
      title: 'Reflection',
      eyebrow: '06 Reflection',
      body: [
        `${projectTitle} can function as evidence of a practice that begins with a question and selects form in response to the communication problem.`,
        `The draft reflection is that ${communicationFocus} depends on connecting research, narrative and production. The project's verified learning and impact remain unknown.`,
      ],
    },
  ];
}
