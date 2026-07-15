import { deearMagazineMetadata } from './metadata';
import { deearMagazineNarrative } from './narrative';

export const deearMagazineProject = {
  ...deearMagazineMetadata,
  chapters: deearMagazineNarrative,
};
