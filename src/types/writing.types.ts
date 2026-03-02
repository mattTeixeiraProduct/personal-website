// ---- Section types (discriminated union on `type`) ----

type ParagraphSection = {
  type: "paragraph";
  text: string;
};

type HeadingSection = {
  type: "heading";
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

type ImageSection = {
  type: "image";
  src: string;
  alt?: string;
};

type FigureSection = {
  type: "figure";
  src: string;
  alt: string;
  caption?: string;
};

type CodeBlockSection = {
  type: "codeBlock";
  code: string;
  language: string;
  label?: string;
};

type BlockquoteSection = {
  type: "blockquote";
  text: string;
  attribution?: string;
};

type CalloutSection = {
  type: "callout";
  variant: "info" | "warning" | "tip" | "note";
  text: string;
};

type TLDRSection = {
  type: "tldr";
  text: string;
};

type ListSection = {
  type: "list";
  ordered: boolean;
  items: string[];
};

type BadgeGroupSection = {
  type: "badgeGroup";
  items: string[];
};

type StatSection = {
  type: "stat";
  value: string;
  label: string;
  trend?: "up" | "down";
};

type TimelineSection = {
  type: "timeline";
  items: { title: string; description?: string; date?: string }[];
};

type EmbedSection = {
  type: "embed";
  url: string;
  title?: string;
};

type TabsSection = {
  type: "tabs";
  tabs: { label: string; content: Section[] }[];
};

type BeforeAfterSection = {
  type: "beforeAfter";
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  initialPosition?: number;
};

type VideoSection = {
  type: "video";
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

type SeparatorSection = {
  type: "separator";
};

export type Section =
  | ParagraphSection
  | HeadingSection
  | ImageSection
  | FigureSection
  | CodeBlockSection
  | BlockquoteSection
  | CalloutSection
  | TLDRSection
  | ListSection
  | BadgeGroupSection
  | StatSection
  | TimelineSection
  | EmbedSection
  | TabsSection
  | BeforeAfterSection
  | VideoSection
  | SeparatorSection;

// ---- Post metadata & full post shape ----

export type WritingPostMetadata = {
  title: string;
  subtitle?: string;
  summary: string;
  publishedAt: string; // "YYYY-MM-DD"
  tag?: string;
  image?: string;
};

export type WritingPost = {
  metadata: WritingPostMetadata;
  sections: Section[];
};
