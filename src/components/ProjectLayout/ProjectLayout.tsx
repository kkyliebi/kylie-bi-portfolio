import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { getNextProject } from '../../data/projects';
import styles from './ProjectLayout.module.css';

type ProjectPanelType = 'intro' | 'text' | 'split' | 'image' | 'closing';
type ProjectPanelWidth = 'medium' | 'wide' | 'full' | 'extended';

type ProjectPanel = {
  title: string;
  type: ProjectPanelType;
  width: ProjectPanelWidth;
  eyebrow?: string;
  supportingText?: string;
};

const projectPanels: ProjectPanel[] = [
  {
    title: 'Question',
    type: 'intro',
    width: 'wide',
    eyebrow: 'Starting point',
    supportingText: 'The opening panel frames the project around the core communication challenge before the case develops into context and process.',
  },
  {
    title: 'Overview',
    type: 'split',
    width: 'full',
    eyebrow: 'Orientation',
    supportingText: 'A two-part panel for project scope, role, timeline and the first layer of narrative structure.',
  },
  {
    title: 'Context',
    type: 'text',
    width: 'medium',
    eyebrow: 'Background',
  },
  {
    title: 'Research',
    type: 'image',
    width: 'extended',
    eyebrow: 'Evidence',
    supportingText: 'Reserved for future research material without introducing placeholder imagery in this sprint.',
  },
  {
    title: 'Development',
    type: 'split',
    width: 'full',
    eyebrow: 'Making',
    supportingText: 'A structured panel for comparing design decisions, iterations and production constraints.',
  },
  {
    title: 'Outcome',
    type: 'text',
    width: 'wide',
    eyebrow: 'Result',
  },
  {
    title: 'Reflection',
    type: 'closing',
    width: 'medium',
    eyebrow: 'Learning',
  },
];

type ProjectLayoutProps = {
  project: Project;
};

function getPanelClassName(panel: ProjectPanel) {
  return [styles.panel, styles[panel.type], styles[panel.width]].join(' ');
}

export function ProjectLayout({ project }: ProjectLayoutProps) {
  const nextProject = getNextProject(project);

  return (
    <article className={styles.project}>
      <div className={styles.track} aria-label={`${project.title} project narrative`}>
        <header className={`${styles.panel} ${styles.heroPanel} ${styles.extended}`}>
          <div className={styles.panelInner}>
            <p className={styles.eyebrow}>{project.eyebrow}</p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.lede}>Placeholder project architecture. Final content and visuals will be added in a later phase.</p>
          </div>
        </header>

        {projectPanels.map((panel) => (
          <section className={getPanelClassName(panel)} key={panel.title} aria-labelledby={`${project.slug}-${panel.title}`}>
            <div className={styles.panelInner}>
              <p className={styles.eyebrow}>{panel.eyebrow}</p>
              <h2 id={`${project.slug}-${panel.title}`}>{panel.title}</h2>
              <p>{panel.title} placeholder content will be defined after the portfolio structure is approved.</p>
              {panel.supportingText ? <p className={styles.supportingText}>{panel.supportingText}</p> : null}
            </div>
            {panel.type === 'split' ? (
              <aside className={styles.panelAside} aria-label={`${panel.title} secondary placeholder`}>
                Secondary placeholder space for future structured project details.
              </aside>
            ) : null}
            {panel.type === 'image' ? (
              <div className={styles.mediaPlaceholder} aria-label={`${panel.title} future visual material placeholder`}>
                Future project material
              </div>
            ) : null}
          </section>
        ))}

        {nextProject ? (
          <Link className={`${styles.panel} ${styles.nextProject} ${styles.wide}`} to={nextProject.path}>
            <span>Next Project</span>
            {nextProject.title}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
