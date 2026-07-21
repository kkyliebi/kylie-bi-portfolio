import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type RefObject } from 'react';
import { getPreferredScrollBehavior } from '../lib/transitions';

type UseHorizontalJourneyOptions = {
  sectionIds: string[];
};

type UseHorizontalJourneyResult = {
  activeIndex: number;
  containerRef: RefObject<HTMLDivElement | null>;
  handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  scrollToIndex: (index: number, behavior?: ScrollBehavior) => void;
};

function clampIndex(index: number, length: number) {
  return Math.min(Math.max(index, 0), Math.max(length - 1, 0));
}

export function useHorizontalJourney({ sectionIds }: UseHorizontalJourneyOptions): UseHorizontalJourneyResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const container = containerRef.current;
      const nextIndex = clampIndex(index, sectionIds.length);
      const target = sectionIds[nextIndex] ? document.getElementById(sectionIds[nextIndex]) : null;

      if (!container || !target) {
        return;
      }

      target.scrollIntoView({
        behavior: getPreferredScrollBehavior(behavior),
        block: 'nearest',
        inline: 'start',
      });
      setActiveIndex(nextIndex);
    },
    [sectionIds],
  );

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry?.target.id) {
          return;
        }

        const nextIndex = sectionIds.indexOf(visibleEntry.target.id);

        if (nextIndex >= 0) {
          setActiveIndex(nextIndex);
        }
      },
      { root: container, threshold: [0.5, 0.7, 0.9] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const wheelContainer = container;

    function handleWheel(event: WheelEvent) {
      if (wheelContainer.scrollWidth <= wheelContainer.clientWidth) {
        return;
      }

      const horizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const distance = horizontalIntent ? event.deltaX : event.deltaY;

      if (distance === 0) {
        return;
      }

      event.preventDefault();
      wheelContainer.scrollBy({
        left: distance,
        behavior: getPreferredScrollBehavior(),
      });
    }

    wheelContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => wheelContainer.removeEventListener('wheel', handleWheel);
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const nextKeys = ['ArrowRight', 'PageDown'];
    const previousKeys = ['ArrowLeft', 'PageUp'];
    const nextIndex = nextKeys.includes(event.key)
      ? activeIndex + 1
      : previousKeys.includes(event.key)
        ? activeIndex - 1
        : event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? sectionIds.length - 1
            : activeIndex;

    if (nextIndex === activeIndex) {
      return;
    }

    event.preventDefault();
    scrollToIndex(nextIndex);
  }

  return {
    activeIndex,
    containerRef,
    handleKeyDown,
    scrollToIndex,
  };
}
