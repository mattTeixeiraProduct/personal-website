"use client";

import type { Section } from "@/types";
import { renderInline } from "@/utils/renderInline";
import { slugify } from "transliteration";

import { HeadingLink } from "@/components/HeadingLink";
import { Separator } from "@/components/ui/separator";
import { Blockquote } from "@/components/mdx/Blockquote";
import { Figure } from "@/components/mdx/Figure";
import { LightboxImage } from "@/components/mdx/LightboxImage";
import { Callout } from "@/components/mdx/Callout";
import { TLDR } from "@/components/mdx/TLDR";
import { BadgeGroup } from "@/components/mdx/BadgeGroup";
import { Stat } from "@/components/mdx/Stat";
import { Timeline } from "@/components/mdx/Timeline";
import { Embed } from "@/components/mdx/Embed";
import { Tabs, Tab } from "@/components/mdx/Tabs";
import { BeforeAfter } from "@/components/mdx/BeforeAfter";
import { Video } from "@/components/mdx/Video";

function makeSlug(str: string): string {
  const strWithAnd = str.replace(/&/g, " and ");
  return slugify(strWithAnd, {
    lowercase: true,
    separator: "-",
  }).replace(/--+/g, "-");
}

function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="text-xs text-font-secondary hover:text-foreground transition-colors"
    >
      Copy
    </button>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p className="mt-2 mb-3 leading-7 text-font-primary">
          {renderInline(section.text)}
        </p>
      );

    case "heading": {
      const slug = makeSlug(section.text);
      return (
        <HeadingLink level={section.level} id={slug}>
          {section.text}
        </HeadingLink>
      );
    }

    case "image":
      return (
        <LightboxImage src={section.src} alt={section.alt || ""} />
      );

    case "figure":
      return (
        <Figure
          src={section.src}
          alt={section.alt}
          caption={section.caption}
        />
      );

    case "codeBlock":
      return (
        <div className="relative mt-2 mb-4 rounded-lg border bg-muted">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <span className="text-xs text-font-secondary capitalize">
              {section.label || section.language}
            </span>
            <CopyButton text={section.code} />
          </div>
          <pre className="overflow-x-auto p-4">
            <code className="text-sm font-mono">{section.code}</code>
          </pre>
        </div>
      );

    case "blockquote":
      return (
        <Blockquote>
          <p>{renderInline(section.text)}</p>
          {section.attribution && (
            <p>{"\u2014 " + section.attribution}</p>
          )}
        </Blockquote>
      );

    case "callout":
      return (
        <Callout type={section.variant}>
          <p>{renderInline(section.text)}</p>
        </Callout>
      );

    case "tldr":
      return (
        <TLDR>
          <p>{renderInline(section.text)}</p>
        </TLDR>
      );

    case "list": {
      const Tag = section.ordered ? "ol" : "ul";
      return (
        <Tag
          className={
            section.ordered
              ? "list-decimal pl-6 my-2"
              : "list-disc pl-6 my-2"
          }
        >
          {section.items.map((item, i) => (
            <li key={i} className="mt-1 mb-2 leading-7">
              {renderInline(item)}
            </li>
          ))}
        </Tag>
      );
    }

    case "badgeGroup":
      return <BadgeGroup items={section.items} />;

    case "stat":
      return (
        <Stat
          value={section.value}
          label={section.label}
          trend={section.trend}
        />
      );

    case "timeline":
      return <Timeline items={section.items} />;

    case "embed":
      return <Embed url={section.url} title={section.title} />;

    case "tabs":
      return (
        <Tabs>
          {section.tabs.map((tab, i) => (
            <Tab key={i} label={tab.label}>
              <SectionList sections={tab.content} />
            </Tab>
          ))}
        </Tabs>
      );

    case "beforeAfter":
      return (
        <BeforeAfter
          before={section.before}
          after={section.after}
          beforeAlt={section.beforeAlt}
          afterAlt={section.afterAlt}
          initialPosition={section.initialPosition}
        />
      );

    case "video":
      return (
        <Video
          src={section.src}
          poster={section.poster}
          autoplay={section.autoplay}
          loop={section.loop}
          muted={section.muted}
        />
      );

    case "separator":
      return (
        <div className="flex w-full justify-center my-8">
          <Separator className="max-w-[10rem]" />
        </div>
      );

    default:
      return null;
  }
}

export function SectionList({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </>
  );
}
