export const transitionDurations = {
  fast: 160,
  base: 280,
  slow: 520,
} as const;

export const transitionEasings = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  architectural: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getPreferredScrollBehavior(behavior: ScrollBehavior = 'smooth'): ScrollBehavior {
  return prefersReducedMotion() ? 'auto' : behavior;
}
