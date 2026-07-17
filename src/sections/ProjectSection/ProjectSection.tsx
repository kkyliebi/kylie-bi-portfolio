import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';

type ProjectSectionProps = {
  section: ExperienceSection;
};

export function ProjectSection({ section }: ProjectSectionProps) {
  return <SectionSkeleton section={section} />;
}
