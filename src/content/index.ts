import { audiProject } from './audi';
import { deearMagazineProject } from './deear-magazine';
import { madamInEdenImAdamProject } from './madam-in-eden-im-adam';
import type { ProjectContent } from './schema';
import { theInfiniteDiscussionProject } from './the-infinite-discussion';
import { tyrannoProject } from './tyranno';

export type { ProjectChapter, ProjectChapterId, ProjectContent, ProjectMedia, ProjectMediaKind, ProjectMediaLayout, ProjectSlug } from './schema';

export const projects = [
  tyrannoProject,
  theInfiniteDiscussionProject,
  audiProject,
  deearMagazineProject,
  madamInEdenImAdamProject,
] satisfies ProjectContent[];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug || project.path.split('/').pop() === slug);
}

export function getNextProject(project: ProjectContent) {
  return projects.find((candidate) => candidate.slug === project.nextSlug);
}
