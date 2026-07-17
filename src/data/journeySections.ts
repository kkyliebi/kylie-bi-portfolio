export type JourneySectionKind = 'landing' | 'about' | 'archive' | 'project' | 'contact';

export type JourneySection = {
  id: string;
  label: string;
  kind: JourneySectionKind;
};

export const journeySections = [
  { id: 'landing', label: 'Landing', kind: 'landing' },
  { id: 'about', label: 'About', kind: 'about' },
  { id: 'archive', label: 'Archive', kind: 'archive' },
  { id: 'project-01', label: 'Project 01', kind: 'project' },
  { id: 'project-02', label: 'Project 02', kind: 'project' },
  { id: 'project-03', label: 'Project 03', kind: 'project' },
  { id: 'project-04', label: 'Project 04', kind: 'project' },
  { id: 'project-05', label: 'Project 05', kind: 'project' },
  { id: 'contact', label: 'Contact', kind: 'contact' },
] satisfies JourneySection[];
