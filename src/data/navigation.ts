export type NavigationItem = {
  label: string;
  path: string;
  sectionId: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Work', path: '/#work', sectionId: 'work' },
  { label: 'About', path: '/#about', sectionId: 'about' },
  { label: 'CV', path: '/#cv', sectionId: 'cv' },
  { label: 'Contact', path: '/#contact', sectionId: 'contact' },
];
