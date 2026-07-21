import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, HTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './DesignSystem.module.css';

type PolymorphicProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

function classNames(...names: Array<string | false | undefined>) {
  return names.filter(Boolean).join(' ');
}

export function SectionLabel({ children, className }: PolymorphicProps) {
  return <p className={classNames(styles.sectionLabel, className)}>{children}</p>;
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  headingLevel?: 1 | 2 | 3;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, headingLevel = 2, className }: SectionHeaderProps) {
  const Heading = `h${headingLevel}` as ElementType;

  return (
    <div className={classNames(styles.sectionHeader, className)}>
      {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
      <Heading>{title}</Heading>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

type EditorialParagraphProps = {
  children: ReactNode;
  variant?: 'body' | 'lede';
  className?: string;
};

export function EditorialParagraph({ children, variant = 'body', className }: EditorialParagraphProps) {
  return <p className={classNames(styles.paragraph, variant === 'lede' && styles.lede, className)}>{children}</p>;
}

type QuoteBlockProps = {
  children: ReactNode;
  citation?: string;
  className?: string;
};

export function QuoteBlock({ children, citation, className }: QuoteBlockProps) {
  return (
    <blockquote className={classNames(styles.quote, className)}>
      <p>{children}</p>
      {citation ? <cite>{citation}</cite> : null}
    </blockquote>
  );
}

type ResearchCaptionProps = {
  children: ReactNode;
  className?: string;
};

export function ResearchCaption({ children, className }: ResearchCaptionProps) {
  return <figcaption className={classNames(styles.researchCaption, className)}>{children}</figcaption>;
}

type MetadataItem = {
  label?: string;
  value: ReactNode;
};

type MetadataProps = {
  items: MetadataItem[];
  className?: string;
};

export function Metadata({ items, className }: MetadataProps) {
  return (
    <dl className={classNames(styles.metadata, className)}>
      {items.map((item, index) => (
        <div className={styles.metadataItem} key={`${item.label ?? 'metadata'}-${index}`}>
          {item.label ? <dt>{item.label}</dt> : null}
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

type LargeNumberProps = {
  children: ReactNode;
  className?: string;
};

export function LargeNumber({ children, className }: LargeNumberProps) {
  return <p className={classNames(styles.largeNumber, className)}>{children}</p>;
}

type DividerProps = {
  variant?: 'full' | 'short';
  className?: string;
};

export function Divider({ variant = 'full', className }: DividerProps) {
  return <div className={classNames(styles.divider, variant === 'short' && styles.short, className)} aria-hidden="true" />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'button';
};

export function Button({ className, ...props }: ButtonProps) {
  return <button className={classNames(styles.button, className)} {...props} />;
}

type TextLinkProps = LinkProps & {
  className?: string;
};

export function TextLink({ className, ...props }: TextLinkProps) {
  return <Link className={classNames(styles.textLink, className)} {...props} />;
}

type ExternalTextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function ExternalTextLink({ className, ...props }: ExternalTextLinkProps) {
  return <a className={classNames(styles.textLink, className)} {...props} />;
}

type NavigationItem = {
  label: string;
  path: string;
  isActive?: boolean;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
};

type NavigationProps = {
  items: NavigationItem[];
  label: string;
  className?: string;
};

export function Navigation({ items, label, className }: NavigationProps) {
  return (
    <nav className={classNames(styles.navigation, className)} aria-label={label}>
      {items.map((item) => (
        <Link
          aria-current={item.isActive ? 'location' : undefined}
          className={styles.navLink}
          key={item.path}
          onClick={item.onClick}
          to={item.path}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

type QuestionBlockProps = {
  number: string;
  question: ReactNode;
  meta: ReactNode;
  expanded?: boolean;
  controls?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  className?: string;
};

export function QuestionBlock({ number, question, meta, expanded, controls, onClick, className }: QuestionBlockProps) {
  return (
    <div className={classNames(styles.questionBlock, className)}>
      <button aria-controls={controls} aria-expanded={expanded} onClick={onClick} type="button">
        <span className={styles.sectionLabel}>{number}</span>
        <span className={styles.questionText}>{question}</span>
        <span className={styles.questionMeta}>{meta}</span>
      </button>
    </div>
  );
}

export type ImageBlockLayout = 'landscape' | 'portrait' | 'fullWidth' | 'document';

type ImageBlockProps = {
  caption: ReactNode;
  layout?: ImageBlockLayout;
  src?: string;
  alt?: string;
  className?: string;
};

export function ImageBlock({ caption, layout = 'document', src, alt = '', className }: ImageBlockProps) {
  return (
    <figure className={classNames(styles.imageBlock, layout !== 'document' && styles[layout], className)}>
      {src ? <img className={styles.imageSurface} src={src} alt={alt} /> : <div className={styles.imageSurface} aria-hidden="true" />}
      <ResearchCaption>{caption}</ResearchCaption>
    </figure>
  );
}

type ImageGridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function ImageGrid({ children, className, ...props }: ImageGridProps) {
  return (
    <div className={classNames(styles.imageGrid, className)} {...props}>
      {children}
    </div>
  );
}

type ArchiveCardProps = LinkProps & {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function ArchiveCard({ eyebrow, title, description, className, ...props }: ArchiveCardProps) {
  return (
    <Link className={classNames(styles.archiveCard, className)} {...props}>
      {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </Link>
  );
}

type ProjectNavigationProps = LinkProps & {
  label: string;
  title: string;
};

export function ProjectNavigation({ label, title, className, ...props }: ProjectNavigationProps) {
  return (
    <Link className={classNames(styles.projectNavigation, className)} {...props}>
      <span>{label}</span>
      <strong>{title}</strong>
    </Link>
  );
}

type FooterProps = {
  children: ReactNode;
  className?: string;
};

export function Footer({ children, className }: FooterProps) {
  return <footer className={classNames(styles.footer, className)}>{children}</footer>;
}
