import { tyrannoMetadata } from './metadata';
import { tyrannoNarrative } from './narrative';

export const tyrannoProject = {
  ...tyrannoMetadata,
  chapters: tyrannoNarrative,
};
