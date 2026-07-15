import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { getNextProject } from '../../data/projects';
import styles from './ProjectLayout.module.css';

type NarrativeSectionType = 'question' | 'context' | 'research' | 'development' | 'process' | 'outcome' | 'reflection';
type NarrativeSectionWidth = 'focused' | 'chapter' | 'expanded';

type NarrativeSection = {
  type: NarrativeSectionType;
  width: NarrativeSectionWidth;
  title: string;
  eyebrow: string;
  purpose: string;
};

const narrativeSections: NarrativeSection[] = [
  {
    type: 'question',
    width: 'focused',
    title: 'Question',
    eyebrow: '01 Question',
    purpose: 'Define the central communication challenge and the project frame.',
  },
  {
    type: 'context',
    width: 'chapter',
    title: 'Context',
    eyebrow: '02 Context',
    purpose: 'Establish the situation, audience, constraints and strategic conditions.',
  },
  {
    type: 'research',
    width: 'chapter',
    title: 'Research',
    eyebrow: '03 Research',
    purpose: 'Surface the references, insights and evidence that shaped the direction.',
  },
  {
    type: 'development',
    width: 'expanded',
    title: 'Concept Development',
    eyebrow: '04 Concept Development',
    purpose: 'Translate research into a clear concept, narrative logic and visual approach.',
  },
  {
    type: 'process',
    width: 'chapter',
    title: 'Process',
    eyebrow: '05 Process',
    purpose: 'Show how the work was structured, tested, refined and made realisable.',
  },
  {
    type: 'outcome',
    width: 'chapter',
    title: 'Outcome',
    eyebrow: '06 Outcome',
    purpose: 'Describe the final communication system, artifact or experience.',
  },
  {
    type: 'reflection',
    width: 'focused',
    title: 'Reflection',
    eyebrow: '07 Reflection',
    purpose: 'Record what the project clarified and how it informs future work.',
  },
];

type ProjectLayoutProps = {
  project: Project;
};

export function ProjectLayout({ project }: ProjectLayoutProps) {
  const nextProject = getNextProject(project);

  return (
    <article className={styles.project}>
      <div className={styles.archiveTrack} aria-label={`${project.title} project narrative`}>
        <header className={`${styles.section} ${styles.hero} ${styles.expanded}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{project.eyebrow}</p>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
          <div className={styles.sectionBody}>
            <p className={styles.lede}>{project.coreQuestion}</p>
            <p className={styles.meta}>{project.category}</p>
          </div>
        </header>

        {narrativeSections.map((section) => {
          const titleId = `${project.slug}-${section.type}`;

          return (
            <section
              aria-labelledby={titleId}
              className={`${styles.section} ${styles[section.type]} ${styles[section.width]}`}
              key={section.type}
            >
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>{section.eyebrow}</p>
                <h2 id={titleId}>{section.title}</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>{section.purpose}</p>
                <p>{section.title} placeholder content will be defined when the individual case narrative is written.</p>
              </div>
            </section>
          );
        })}

        {nextProject ? (
          <Link className={`${styles.section} ${styles.nextProject} ${styles.focused}`} to={nextProject.path}>
            <span>Next Project</span>
            <strong>{nextProject.title}</strong>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
