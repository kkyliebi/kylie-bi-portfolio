import { audiMetadata } from './metadata';
import { audiNarrative } from './narrative';

export const audiProject = {
  ...audiMetadata,
  chapters: audiNarrative,
};
