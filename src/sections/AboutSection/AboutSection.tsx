import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';

type AboutSectionProps = {
  section: ExperienceSection;
};

export function AboutSection({ section }: AboutSectionProps) {
  return (
    <SectionSkeleton section={section} status="Draft practice profile">
      <p>
        Kylie Bi works across visual communication, creative direction, concept development, narrative systems,
        creative production, brand communication, and interdisciplinary storytelling.
      </p>
      <p>The problem determines the medium. Thinking precedes form.</p>
      <p>TODO — Add Kylie's approved biography and personal perspective.</p>
    </SectionSkeleton>
  );
}
