import type { ExperienceSection } from '../../data/experienceBlueprint';
import { SectionSkeleton } from '../SectionSkeleton';

type ContactSectionProps = {
  section: ExperienceSection;
};

export function ContactSection({ section }: ContactSectionProps) {
  return (
    <SectionSkeleton section={section} status="Contact details pending">
      <p>The archive closes with an invitation to continue the conversation.</p>
      <p>TODO — Add verified email and approved professional links.</p>
    </SectionSkeleton>
  );
}
