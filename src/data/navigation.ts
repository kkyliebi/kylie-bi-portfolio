export type NavigationItem = {
  label: string;
  path: string;
  sectionId: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Landing', path: '/#landing', sectionId: 'landing' },
  { label: 'About', path: '/#about', sectionId: 'about' },
  { label: 'Archive', path: '/#archive', sectionId: 'archive' },
  { label: 'Contact', path: '/#contact', sectionId: 'contact' },
];
