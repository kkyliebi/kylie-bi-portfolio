import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { getNextProject } from '../../data/projects';
import styles from './ProjectLayout.module.css';

const projectSectionTitles = [
  'Question',
  'Overview',
  'Context',
  'Research',
  'Development',
  'Outcome',
  'Reflection',
] as const;

type ProjectLayoutProps = {
  project: Project;
};

export function ProjectLayout({ project }: ProjectLayoutProps) {
  const nextProject = getNextProject(project);

  return (
    <article className={styles.project}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{project.eyebrow}</p>
        <h1 className={styles.title}>{project.title}</h1>
        <p>Placeholder project architecture. Final content and visuals will be added in a later phase.</p>
      </header>

      <div className={styles.sections}>
        {projectSectionTitles.map((sectionTitle) => (
          <section className={styles.section} key={sectionTitle} aria-labelledby={`${project.slug}-${sectionTitle}`}>
            <h2 id={`${project.slug}-${sectionTitle}`}>{sectionTitle}</h2>
            <p>{sectionTitle} placeholder content will be defined after the portfolio structure is approved.</p>
          </section>
        ))}
      </div>

      {nextProject ? (
        <Link className={styles.nextProject} to={nextProject.path}>
          <span>Next Project</span>
          {nextProject.title}
        </Link>
      ) : null}
    </article>
  );
}
