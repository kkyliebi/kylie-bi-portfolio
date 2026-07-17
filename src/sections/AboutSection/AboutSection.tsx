import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';

type AboutSectionProps = {
  section: ExperienceSection;
};

export function AboutSection({ section }: AboutSectionProps) {
  return <SectionSkeleton section={section} />;
}
