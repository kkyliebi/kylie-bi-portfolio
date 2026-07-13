export type ProjectSlug =
  | 'tyranno'
  | 'scentsync'
  | 'aprica-around'
  | 'madam-in-eden-im-adam'
  | 'audi';

export type Project = {
  slug: ProjectSlug;
  title: string;
  path: string;
  eyebrow: string;
  nextSlug?: ProjectSlug;
};

export const projects: Project[] = [
  {
    slug: 'tyranno',
    title: 'Tyranno',
    path: '/tyranno',
    eyebrow: 'Project placeholder',
    nextSlug: 'scentsync',
  },
  {
    slug: 'scentsync',
    title: 'ScentSync',
    path: '/scentsync',
    eyebrow: 'Project placeholder',
    nextSlug: 'aprica-around',
  },
  {
    slug: 'aprica-around',
    title: 'Aprica Around',
    path: '/aprica-around',
    eyebrow: 'Project placeholder',
    nextSlug: 'madam-in-eden-im-adam',
  },
  {
    slug: 'madam-in-eden-im-adam',
    title: "Madam, in Eden, I'm Adam",
    path: '/madam-in-eden-im-adam',
    eyebrow: 'Project placeholder',
    nextSlug: 'audi',
  },
  {
    slug: 'audi',
    title: 'Audi',
    path: '/audi',
    eyebrow: 'Project placeholder',
    nextSlug: 'tyranno',
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(project: Project) {
  return projects.find((candidate) => candidate.slug === project.nextSlug);
}
