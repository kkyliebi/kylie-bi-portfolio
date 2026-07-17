import { journeySections } from '../../data/journeySections';
import { HorizontalJourney } from '../../layouts/HorizontalJourney';
import { AboutSection, ArchiveSection, ContactSection, LandingSection, ProjectSection } from '../../sections';
import styles from './Home.module.css';

function renderJourneySection(section: (typeof journeySections)[number]) {
  if (section.kind === 'landing') {
    return <LandingSection />;
  }

  if (section.kind === 'about') {
    return <AboutSection />;
  }

  if (section.kind === 'archive') {
    return <ArchiveSection />;
  }

  if (section.kind === 'contact') {
    return <ContactSection />;
  }

  return <ProjectSection id={section.id} label={section.label} />;
}

export function Home() {
  return (
    <div className={styles.home} id="top">
      <HorizontalJourney
        items={journeySections.map((section) => ({
          id: section.id,
          label: section.label,
          content: renderJourneySection(section),
        }))}
        label="Portfolio horizontal journey"
      />
    </div>
  );
}
