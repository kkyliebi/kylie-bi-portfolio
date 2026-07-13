import { useEffect, useState, type MouseEvent } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import styles from './Layout.module.css';

export function Layout() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(navigationItems[0].sectionId);

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
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${sectionId}`);
    setActiveSection(sectionId);
  }

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <header className={styles.header}>
        <Link className={styles.logo} to="/#top" aria-label="Kylie Bi home" onClick={(event) => handleSectionLinkClick(event, 'top')}>
          Kylie Bi
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const isActive = location.pathname === '/' && activeSection === item.sectionId;

            return (
              <Link
                aria-current={isActive ? 'location' : undefined}
                className={isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                key={item.path}
                onClick={(event) => handleSectionLinkClick(event, item.sectionId)}
                to={item.path}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
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
