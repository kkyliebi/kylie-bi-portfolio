export type ProjectSlug =
  | 'tyranno'
  | 'the-infinite-discussion'
  | 'audi'
  | 'deear-magazine'
  | 'madam-in-eden-im-adam';

export type Project = {
  slug: ProjectSlug;
  title: string;
  path: string;
  eyebrow: string;
  category: string;
  coreQuestion: string;
  summary: string;
  nextSlug?: ProjectSlug;
};

export const projects: Project[] = [
  {
    slug: 'tyranno',
    title: 'TYRANNO',
    path: '/work/tyranno',
    eyebrow: 'Project placeholder',
    category: 'Communication Design',
    coreQuestion: 'How can a complex subject become a clear and engaging communication experience?',
    summary: 'A placeholder summary for the future TYRANNO case narrative.',
    nextSlug: 'the-infinite-discussion',
  },
  {
    slug: 'the-infinite-discussion',
    title: 'The Infinite Discussion',
    path: '/work/infinite-discussion',
    eyebrow: 'Project placeholder',
    category: 'Editorial & Visual Communication',
    coreQuestion: 'How can discussion be structured so multiple perspectives remain legible?',
    summary: 'A placeholder summary for the future The Infinite Discussion case narrative.',
    nextSlug: 'audi',
  },
  {
    slug: 'audi',
    title: 'Audi Integrated Brand Communication',
    path: '/work/audi',
    eyebrow: 'Project placeholder',
    category: 'Automotive & Brand Communication',
    coreQuestion: 'How can a brand communication system connect strategy, production and experience?',
    summary: 'A placeholder summary for the future Audi Integrated Brand Communication case narrative.',
    nextSlug: 'deear-magazine',
  },
  {
    slug: 'deear-magazine',
    title: 'Deear Magazine',
    path: '/work/deear',
    eyebrow: 'Project placeholder',
    category: 'Publishing & Creative Production',
    coreQuestion: 'How can editorial structure turn a creative point of view into a repeatable publication system?',
    summary: 'A placeholder summary for the future Deear Magazine case narrative.',
    nextSlug: 'madam-in-eden-im-adam',
  },
  {
    slug: 'madam-in-eden-im-adam',
    title: "Madam, in Eden, I'm Adam",
    path: '/work/madam-in-eden',
    eyebrow: 'Project placeholder',
    category: 'Concept Development',
    coreQuestion: 'How can language, identity and form create a coherent conceptual experience?',
    summary: "A placeholder summary for the future Madam, in Eden, I'm Adam case narrative.",
    nextSlug: 'tyranno',
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug || project.path.split('/').pop() === slug);
}

export function getNextProject(project: Project) {
  return projects.find((candidate) => candidate.slug === project.nextSlug);
}
