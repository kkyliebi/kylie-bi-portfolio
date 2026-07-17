import { Fragment, useMemo, type ReactNode } from 'react';
import { useHorizontalJourney } from '../../hooks/useHorizontalJourney';
import styles from './HorizontalJourney.module.css';

type HorizontalJourneyItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type HorizontalJourneyProps = {
  items: HorizontalJourneyItem[];
  label: string;
};

export function HorizontalJourney({ items, label }: HorizontalJourneyProps) {
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const { activeIndex, containerRef, handleKeyDown, scrollToIndex } = useHorizontalJourney({
    sectionIds,
  });

  return (
    <div className={styles.journey}>
      <nav className={styles.controls} aria-label={`${label} sections`}>
        {items.map((item, index) => (
          <button
            aria-current={activeIndex === index ? 'step' : undefined}
            className={styles.control}
            key={item.id}
            onClick={() => scrollToIndex(index)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div
        aria-label={label}
        className={styles.track}
        onKeyDown={handleKeyDown}
        ref={containerRef}
        tabIndex={0}
      >
        {items.map((item) => (
          <Fragment key={item.id}>{item.content}</Fragment>
        ))}
      </div>
    </div>
  );
}
