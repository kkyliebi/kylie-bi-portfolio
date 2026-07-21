export type ExperienceSectionKind = 'landing' | 'about' | 'archive' | 'project' | 'contact';

export type ExperienceNarrative = {
  mission: string;
  currentQuestion: string;
  reveals: string;
  leavesUnresolved: string;
  nextDestination: string;
};

export type ExperienceSection = {
  id: string;
  label: string;
  kind: ExperienceSectionKind;
  narrative: ExperienceNarrative;
};

export const experienceBlueprint = [
  {
    id: 'landing',
    label: 'Landing',
    kind: 'landing',
    narrative: {
      mission: 'Establish the portfolio as a communication archive and orient the visitor to the horizontal journey.',
      currentQuestion: 'What kind of practice is being entered?',
      reveals: 'The site position, reading mode and entry point into the archive.',
      leavesUnresolved: 'The full working method, project evidence and professional detail.',
      nextDestination: 'about',
    },
  },
  {
    id: 'about',
    label: 'About',
    kind: 'about',
    narrative: {
      mission: 'Frame the practitioner and method before showing project evidence.',
      currentQuestion: 'How should the practice be understood?',
      reveals: 'Professional context, methodological stance and scope of practice.',
      leavesUnresolved: 'The selected projects and how the method appears through work.',
      nextDestination: 'archive',
    },
  },
  {
    id: 'archive',
    label: 'Archive',
    kind: 'archive',
    narrative: {
      mission: 'Introduce the selected project sequence as one connected archive.',
      currentQuestion: 'How do the projects relate to one another?',
      reveals: 'The project set, order and archive logic.',
      leavesUnresolved: 'The individual narrative and evidence inside each project.',
      nextDestination: 'project-01',
    },
  },
  {
    id: 'project-01',
    label: 'Project 01',
    kind: 'project',
    narrative: {
      mission: 'Hold the first project position in the archive sequence.',
      currentQuestion: 'What is the first evidence point in the methodology?',
      reveals: 'The first project entry point and its role in the archive.',
      leavesUnresolved: 'Detailed context, research, process, outcome and reflection.',
      nextDestination: 'project-02',
    },
  },
  {
    id: 'project-02',
    label: 'Project 02',
    kind: 'project',
    narrative: {
      mission: 'Hold the second project position in the archive sequence.',
      currentQuestion: 'How does the next project extend the methodology?',
      reveals: 'The second project entry point and its relationship to the sequence.',
      leavesUnresolved: 'Detailed context, research, process, outcome and reflection.',
      nextDestination: 'project-03',
    },
  },
  {
    id: 'project-03',
    label: 'Project 03',
    kind: 'project',
    narrative: {
      mission: 'Hold the third project position in the archive sequence.',
      currentQuestion: 'What new aspect of communication practice appears here?',
      reveals: 'The third project entry point and its distinct role.',
      leavesUnresolved: 'Detailed context, research, process, outcome and reflection.',
      nextDestination: 'project-04',
    },
  },
  {
    id: 'project-04',
    label: 'Project 04',
    kind: 'project',
    narrative: {
      mission: 'Hold the fourth project position in the archive sequence.',
      currentQuestion: 'How does the archive continue to broaden the method?',
      reveals: 'The fourth project entry point and its place in the archive.',
      leavesUnresolved: 'Detailed context, research, process, outcome and reflection.',
      nextDestination: 'project-05',
    },
  },
  {
    id: 'project-05',
    label: 'Project 05',
    kind: 'project',
    narrative: {
      mission: 'Hold the fifth project position and close the project sequence.',
      currentQuestion: 'What final evidence point completes the selected archive?',
      reveals: 'The final project entry point and the end of the archive sequence.',
      leavesUnresolved: 'Detailed context, research, process, outcome and reflection.',
      nextDestination: 'contact',
    },
  },
  {
    id: 'contact',
    label: 'Contact',
    kind: 'contact',
    narrative: {
      mission: 'Provide the transition from archive reading to professional contact.',
      currentQuestion: 'What should happen after the archive has been read?',
      reveals: 'The closing pathway and contact destination.',
      leavesUnresolved: 'Future conversation, collaboration fit and practical next steps.',
      nextDestination: 'end',
    },
  },
] satisfies ExperienceSection[];

export function getExperienceSectionById(id: string) {
  return experienceBlueprint.find((section) => section.id === id);
}
