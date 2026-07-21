import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { getPreferredScrollBehavior } from '../../lib/transitions';
import { Navigation } from '../design-system';
import styles from './Layout.module.css';

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState(navigationItems[0].sectionId);

  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return undefined;
    }

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
    };

    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--header-height');
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      return undefined;
    }

    const sections = navigationItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  function handleSectionLinkClick(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
    if (location.pathname !== '/') {
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();
    const nextHash = `#${sectionId}`;

    if (location.hash === nextHash) {
      section.scrollIntoView({ behavior: getPreferredScrollBehavior(), block: 'start', inline: 'start' });
      return;
    }

    navigate({ pathname: '/', hash: nextHash }, { preventScrollReset: true });
  }

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <header className={styles.header} ref={headerRef}>
        <Link className={styles.logo} to="/#top" aria-label="Kylie Bi home" onClick={(event) => handleSectionLinkClick(event, 'top')}>
          Kylie Bi
        </Link>
        <Navigation
          className={styles.nav}
          items={navigationItems.map((item) => ({
            label: item.label,
            path: item.path,
            isActive: location.pathname === '/' && activeSection === item.sectionId,
            onClick: (event) => handleSectionLinkClick(event, item.sectionId),
          }))}
          label="Primary navigation"
        />
      </header>
      <div className={styles.progress} aria-hidden="true" />
      <main className={styles.main} id="main-content">
        <div className={styles.container} data-scroll-container>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
