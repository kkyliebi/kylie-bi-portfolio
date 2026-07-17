import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';

type LandingSectionProps = {
  section: ExperienceSection;
};

export function LandingSection({ section }: LandingSectionProps) {
  return <SectionSkeleton section={section} />;
}
