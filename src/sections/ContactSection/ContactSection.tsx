import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';

type ContactSectionProps = {
  section: ExperienceSection;
};

export function ContactSection({ section }: ContactSectionProps) {
  return <SectionSkeleton section={section} />;
}
