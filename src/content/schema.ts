export type ProjectSlug =
  | 'tyranno'
  | 'the-infinite-discussion'
  | 'audi'
  | 'deear-magazine'
  | 'madam-in-eden-im-adam';

export type ProjectChapterId = 'context' | 'research' | 'conceptDevelopment' | 'designProcess' | 'finalOutcome' | 'reflection';

export type ProjectMediaKind = 'hero' | 'gallery' | 'process' | 'research' | 'archive';
export type ProjectMediaLayout = 'landscape' | 'portrait' | 'fullWidth';

export type ProjectMedia = {
  id: string;
  kind: ProjectMediaKind;
  layout: ProjectMediaLayout;
  caption: string;
  src?: string;
  alt?: string;
};

export type ProjectChapter = {
  id: ProjectChapterId;
  title: string;
  eyebrow: string;
  body: string[];
  media?: ProjectMedia[];
};

export type ProjectContent = {
  slug: ProjectSlug;
  title: string;
  subtitle?: string;
  path: string;
  eyebrow: string;
  year?: string;
  category: string;
  role?: string;
  leadQuestion: string;
  summary: string;
  contentStatus: 'draft' | 'verified';
  metadata: {
    year?: string;
    category: string;
    role?: string;
  };
  chapters: ProjectChapter[];
  media?: ProjectMedia[];
  nextSlug?: ProjectSlug;
};
