import { projects } from './projects';

export type Question = {
  id: string;
  prompt: string;
};

export const questions: Question[] = projects.map((project) => ({
  id: project.slug,
  prompt: project.coreQuestion,
}));
