import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import type { Project } from '../../data/projects';
import { getNextProject } from '../../data/projects';
import { Divider, EditorialParagraph, ImageBlock, ImageGrid, Metadata, ProjectNavigation, SectionLabel } from '../design-system';
import styles from './ProjectLayout.module.css';

const chapterClassNames = {
  context: styles.context,
  research: styles.research,
  conceptDevelopment: styles.development,
  designProcess: styles.process,
  finalOutcome: styles.outcome,
  reflection: styles.reflection,
};

const chapterWidthClassNames = {
  context: styles.chapter,
  research: styles.chapter,
  conceptDevelopment: styles.expanded,
  designProcess: styles.chapter,
  finalOutcome: styles.chapter,
  reflection: styles.focused,
};

const chapterEditorialRoles = {
  context: 'Background',
  research: 'Archive',
  conceptDevelopment: 'Process',
  designProcess: 'Iteration',
  finalOutcome: 'Exhibition',
  reflection: 'Epilogue',
} satisfies Record<Project['chapters'][number]['id'], string>;

type ProjectLayoutProps = {
  project: Project;
};

export function ProjectLayout({ project }: ProjectLayoutProps) {
  const nextProject = getNextProject(project);
  const projectRef = useRef<HTMLElement>(null);
  const [activeChapter, setActiveChapter] = useState(project.chapters[0].id);

  useEffect(() => {
    const projectElement = projectRef.current;

    if (!projectElement) {
      return undefined;
    }

    const chapters = project.chapters
      .map((chapter) => document.getElementById(`${project.slug}-${chapter.id}`)?.closest('section'))
      .filter((chapter): chapter is HTMLElement => Boolean(chapter));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const chapter = visibleEntry?.target.getAttribute('data-chapter') as Project['chapters'][number]['id'] | null;

        if (chapter) {
          setActiveChapter(chapter);
        }
      },
      { root: projectElement, threshold: [0.45, 0.6, 0.75] },
    );

    chapters.forEach((chapter) => observer.observe(chapter));

    return () => observer.disconnect();
  }, [project.chapters, project.slug]);

  function scrollToChapter(chapter: Project['chapters'][number]['id'], behavior: ScrollBehavior = 'smooth') {
    document.getElementById(`${project.slug}-${chapter}`)?.closest('section')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : behavior,
      block: 'nearest',
      inline: 'start',
    });
  }

  function handleChapterLinkClick(event: MouseEvent<HTMLAnchorElement>, chapter: Project['chapters'][number]['id']) {
    event.preventDefault();
    scrollToChapter(chapter);
    setActiveChapter(chapter);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const activeIndex = project.chapters.findIndex((chapter) => chapter.id === activeChapter);
    const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

    if (direction === 0) {
      return;
    }

    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), project.chapters.length - 1);

    if (nextIndex !== activeIndex) {
      event.preventDefault();
      scrollToChapter(project.chapters[nextIndex].id);
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
        {project.chapters.map((chapter) => (
          <a
            aria-current={activeChapter === chapter.id ? 'location' : undefined}
            className={activeChapter === chapter.id ? `${styles.chapterLink} ${styles.activeChapter}` : styles.chapterLink}
            href={`#${project.slug}-${chapter.id}`}
            key={chapter.id}
            onClick={(event) => handleChapterLinkClick(event, chapter.id)}
          >
            {chapter.eyebrow}
          </a>
        ))}
      </nav>
      <div className={styles.archiveTrack} aria-label={`${project.title} project narrative`}>
        <header className={`${styles.section} ${styles.hero} ${styles.expanded}`}>
          <div className={styles.sectionHeader}>
            <SectionLabel className={styles.eyebrow}>{project.eyebrow}</SectionLabel>
            <p className={styles.chapterRole}>Opening Statement / Invitation</p>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
          <div className={styles.sectionBody}>
            <p className={styles.lede}>{project.leadQuestion}</p>
            <EditorialParagraph>{project.summary}</EditorialParagraph>
            <Metadata
              className={styles.meta}
              items={[
                { label: 'Status', value: project.contentStatus === 'draft' ? 'Draft' : 'Verified' },
                { label: 'Category', value: project.metadata.category },
                ...(project.metadata.year ? [{ label: 'Year', value: project.metadata.year }] : []),
                ...(project.metadata.role ? [{ label: 'Role', value: project.metadata.role }] : []),
              ]}
            />
          </div>
        </header>

        {project.chapters.map((chapter) => {
          const titleId = `${project.slug}-${chapter.id}`;

          return (
            <section
              aria-labelledby={titleId}
              className={`${styles.section} ${chapterClassNames[chapter.id]} ${chapterWidthClassNames[chapter.id]}`}
              data-chapter={chapter.id}
              key={chapter.id}
            >
              <div className={styles.sectionHeader}>
                <SectionLabel className={styles.eyebrow}>{chapter.eyebrow}</SectionLabel>
                <p className={styles.chapterRole}>{chapterEditorialRoles[chapter.id]}</p>
                <h2 id={titleId}>{chapter.title}</h2>
              </div>
              <div className={styles.sectionBody}>
                {chapter.body.map((paragraph, index) => (
                  <EditorialParagraph key={paragraph} variant={index === 0 ? 'lede' : 'body'}>
                    {paragraph}
                  </EditorialParagraph>
                ))}
              </div>
              {chapter.media ? (
                <ImageGrid className={styles.mediaGrid} aria-label={`${chapter.title} draft media placements`}>
                  {chapter.media.map((item) => (
                    <ImageBlock
                      alt={item.alt}
                      caption={item.caption}
                      className={styles.mediaSlot}
                      key={item.id}
                      layout={item.layout}
                      src={item.src}
                    />
                  ))}
                </ImageGrid>
              ) : null}
              <Divider className={styles.chapterClose} variant="short" />
            </section>
          );
        })}

        {nextProject ? (
          <aside className={`${styles.nextPanel} ${styles.focused}`} aria-label="Next project">
            <ProjectNavigation className={styles.nextProject} label="Next Project" title={nextProject.title} to={nextProject.path} />
          </aside>
        ) : null}
      </div>
    </article>
  );
}
