import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';

type ArchiveSectionProps = {
  section: ExperienceSection;
};

export function ArchiveSection({ section }: ArchiveSectionProps) {
  return <SectionSkeleton section={section} />;
}
