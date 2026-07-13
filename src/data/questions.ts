export type Question = {
  id: string;
  prompt: string;
};

export const questions: Question[] = [
  {
    id: 'practice',
    prompt: 'What design questions guide this portfolio practice?',
  },
  {
    id: 'systems',
    prompt: 'How can each project page reuse the same narrative structure?',
  },
  {
    id: 'growth',
    prompt: 'What should the architecture make easier to expand later?',
  },
];
