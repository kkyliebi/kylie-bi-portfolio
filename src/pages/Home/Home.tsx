import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, type ProjectSlug } from '../../data/projects';
import styles from './Home.module.css';

export function Home() {
  const [expandedProject, setExpandedProject] = useState<ProjectSlug>(projects[0].slug);

  return (
    <div className={styles.home} id="top">
      <section className={styles.section} aria-labelledby="opening-title">
        <p className={styles.sectionNumber}>01 Opening</p>
        <div className={styles.openingContent}>
          <h1 id="opening-title">Kylie Bi</h1>
          <p className={styles.role}>Communication Designer &amp; Creative Producer</p>
          <p className={styles.intro}>
            I work across concept development, visual communication and creative production—turning complex questions into clear, coherent and realisable communication experiences.
          </p>
          <a className={styles.primaryCta} href="#work">
            Selected Work →
          </a>
        </div>
      </section>

      <section className={styles.section} id="work" aria-labelledby="questions-title">
        <p className={styles.sectionNumber}>02 Questions</p>
        <div className={styles.sectionHeader}>
          <h2 id="questions-title">Questions</h2>
          <p>
            Questions are the core communication challenges explored by each project. Open one question at a time to enter the project narrative.
          </p>
        </div>
        <div className={styles.questionList}>
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.slug;
            const contentId = `${project.slug}-details`;

            return (
              <article className={styles.questionItem} key={project.slug}>
                <button
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  className={styles.questionButton}
                  onClick={() => setExpandedProject(project.slug)}
                  type="button"
                >
                  <span className={styles.questionNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.questionText}>{project.leadQuestion}</span>
                  <span className={styles.questionProject}>{project.title}</span>
                </button>
                <div className={styles.questionDetails} hidden={!isExpanded} id={contentId}>
                  <p className={styles.category}>{project.category}</p>
                  <p>{project.summary}</p>
                  <Link className={styles.caseLink} to={project.path}>
                    View Case →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.section} id="about" aria-labelledby="about-title">
        <p className={styles.sectionNumber}>03 About</p>
        <div className={styles.sectionHeader}>
          <h2 id="about-title">About</h2>
          <p>Placeholder architecture for professional context, working method and selected capabilities.</p>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.subsection} aria-labelledby="professional-summary-title">
            <h3 id="professional-summary-title">Professional Summary</h3>
            <p>Placeholder summary to be developed after the narrative structure is approved.</p>
          </div>
          <div className={styles.subsection} aria-labelledby="methodology-title">
            <h3 id="methodology-title">Methodology</h3>
            <ol className={styles.methodology}>
              <li>Question</li>
              <li>Understand</li>
              <li>Structure</li>
              <li>Translate</li>
              <li>Materialise</li>
            </ol>
          </div>
          <div className={styles.subsection} aria-labelledby="capabilities-title">
            <h3 id="capabilities-title">Selected Capabilities</h3>
            <p>Placeholder capability groups for future communication design, production and brand work.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="cv" aria-labelledby="cv-title">
        <p className={styles.sectionNumber}>04 CV</p>
        <div className={styles.sectionHeader}>
          <h2 id="cv-title">CV</h2>
          <p>Download functionality will be connected in a later phase.</p>
        </div>
        <div className={styles.downloadList}>
          <button className={styles.downloadPlaceholder} type="button" disabled>
            Creative Direction &amp; Communication CV
          </button>
          <button className={styles.downloadPlaceholder} type="button" disabled>
            Automotive &amp; Brand Communication CV
          </button>
        </div>
      </section>

      <section className={styles.section} id="contact" aria-labelledby="contact-title">
        <p className={styles.sectionNumber}>05 Contact</p>
        <div className={styles.sectionHeader}>
          <h2 id="contact-title">Let's work together.</h2>
          <p>Available for creative production, communication design, brand communication and interdisciplinary creative roles.</p>
          <p className={styles.location}>Milan, Italy</p>
        </div>
        <ul className={styles.contactLinks} aria-label="Contact links">
          <li>
            <a href="mailto:hello@example.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
