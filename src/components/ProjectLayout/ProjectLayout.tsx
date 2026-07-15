import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { getNextProject } from '../../data/projects';
import styles from './ProjectLayout.module.css';

type ChapterType = 'context' | 'research' | 'development' | 'process' | 'outcome' | 'reflection';
type ChapterWidth = 'focused' | 'chapter' | 'expanded';

type ProjectChapter = {
  type: ChapterType;
  width: ChapterWidth;
  title: string;
  eyebrow: string;
  purpose: string;
  mediaSlots?: MediaSlot[];
};

type MediaSlot = {
  kind: 'landscape' | 'portrait' | 'fullWidth';
  caption: string;
};

const projectChapters: ProjectChapter[] = [
  {
    type: 'context',
    width: 'chapter',
    title: 'Context',
    eyebrow: '01 Context',
    purpose: 'Establish the situation, audience, constraints and strategic conditions.',
  },
  {
    type: 'research',
    width: 'chapter',
    title: 'Research',
    eyebrow: '02 Research',
    purpose: 'Surface the references, insights and evidence that shaped the direction.',
    mediaSlots: [
      { kind: 'landscape', caption: 'Landscape research image placeholder.' },
      { kind: 'portrait', caption: 'Portrait research image placeholder.' },
    ],
  },
  {
    type: 'development',
    width: 'expanded',
    title: 'Concept Development',
    eyebrow: '03 Concept Development',
    purpose: 'Translate research into a clear concept, narrative logic and visual approach.',
    mediaSlots: [{ kind: 'fullWidth', caption: 'Full-width concept image placeholder.' }],
  },
  {
    type: 'process',
    width: 'chapter',
    title: 'Process',
    eyebrow: '04 Process',
    purpose: 'Show how the work was structured, tested, refined and made realisable.',
  },
  {
    type: 'outcome',
    width: 'chapter',
    title: 'Outcome',
    eyebrow: '05 Outcome',
    purpose: 'Describe the final communication system, artifact or experience.',
    mediaSlots: [{ kind: 'landscape', caption: 'Landscape outcome image placeholder.' }],
  },
  {
    type: 'reflection',
    width: 'focused',
    title: 'Reflection',
    eyebrow: '06 Reflection',
    purpose: 'Record what the project clarified and how it informs future work.',
  },
];

type ProjectLayoutProps = {
  project: Project;
};

export function ProjectLayout({ project }: ProjectLayoutProps) {
  const nextProject = getNextProject(project);
  const projectRef = useRef<HTMLElement>(null);
  const [activeChapter, setActiveChapter] = useState<ChapterType>(projectChapters[0].type);

  useEffect(() => {
    const projectElement = projectRef.current;

    if (!projectElement) {
      return undefined;
    }

    const chapters = projectChapters
      .map((chapter) => document.getElementById(`${project.slug}-${chapter.type}`)?.closest('section'))
      .filter((chapter): chapter is HTMLElement => Boolean(chapter));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const chapter = visibleEntry?.target.getAttribute('data-chapter') as ChapterType | null;

        if (chapter) {
          setActiveChapter(chapter);
        }
      },
      { root: projectElement, threshold: [0.45, 0.6, 0.75] },
    );

    chapters.forEach((chapter) => observer.observe(chapter));

    return () => observer.disconnect();
  }, [project.slug]);

  function scrollToChapter(chapter: ChapterType, behavior: ScrollBehavior = 'smooth') {
    document.getElementById(`${project.slug}-${chapter}`)?.closest('section')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : behavior,
      block: 'nearest',
      inline: 'start',
    });
  }

  function handleChapterLinkClick(event: MouseEvent<HTMLAnchorElement>, chapter: ChapterType) {
    event.preventDefault();
    scrollToChapter(chapter);
    setActiveChapter(chapter);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const activeIndex = projectChapters.findIndex((chapter) => chapter.type === activeChapter);
    const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

    if (direction === 0) {
      return;
    }

    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), projectChapters.length - 1);

    if (nextIndex !== activeIndex) {
      event.preventDefault();
      scrollToChapter(projectChapters[nextIndex].type);
    }
  }

  return (
    <article
      aria-label={`${project.title} project narrative`}
      className={styles.project}
      onKeyDown={handleKeyDown}
      ref={projectRef}
      tabIndex={0}
    >
      <nav className={styles.chapterNav} aria-label={`${project.title} chapters`}>
        {projectChapters.map((chapter) => (
          <a
            aria-current={activeChapter === chapter.type ? 'location' : undefined}
            className={activeChapter === chapter.type ? `${styles.chapterLink} ${styles.activeChapter}` : styles.chapterLink}
            href={`#${project.slug}-${chapter.type}`}
            key={chapter.type}
            onClick={(event) => handleChapterLinkClick(event, chapter.type)}
          >
            {chapter.eyebrow}
          </a>
        ))}
      </nav>
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

        {projectChapters.map((chapter) => {
          const titleId = `${project.slug}-${chapter.type}`;

          return (
            <section
              aria-labelledby={titleId}
              className={`${styles.section} ${styles[chapter.type]} ${styles[chapter.width]}`}
              data-chapter={chapter.type}
              key={chapter.type}
            >
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>{chapter.eyebrow}</p>
                <h2 id={titleId}>{chapter.title}</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>{chapter.purpose}</p>
                <p>{chapter.title} placeholder content will be defined when the individual case narrative is written.</p>
              </div>
              {chapter.mediaSlots ? (
                <div className={styles.mediaGrid} aria-label={`${chapter.title} future image placements`}>
                  {chapter.mediaSlots.map((slot) => (
                    <figure className={`${styles.mediaSlot} ${styles[slot.kind]}`} key={`${chapter.type}-${slot.kind}`}>
                      <div className={styles.mediaFrame} aria-hidden="true" />
                      <figcaption>{slot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}

        {nextProject ? (
          <aside className={`${styles.nextPanel} ${styles.focused}`} aria-label="Next project">
            <Link className={styles.nextProject} to={nextProject.path}>
              <span>Next Project</span>
              <strong>{nextProject.title}</strong>
            </Link>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
