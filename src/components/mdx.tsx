import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import { slugify as transliterate } from "transliteration";
import Image from "next/image";
import Link from "next/link";

import { HeadingLink } from "@/components/HeadingLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion as ShadAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Icon } from "@/components/Icon";
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

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className="text-primary underline underline-offset-4 hover:text-primary/80" {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className="text-primary underline underline-offset-4 hover:text-primary/80" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }: { alt?: string; src: string; [key: string]: any }) {
  if (!src) {
    console.error("Image requires a valid 'src' property.");
    return null;
  }

  return (
    <LightboxImage src={src} alt={alt || ""} />
  );
}

function slugify(str: string): string {
  const strWithAnd = str.replace(/&/g, " and ");
  return transliterate(strWithAnd, {
    lowercase: true,
    separator: "-",
  }).replace(/\-\-+/g, "-");
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const CustomHeading = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink level={level} id={slug}>
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `h${level}`;
  return CustomHeading;
}

function hasBlockChildren(children: ReactNode): boolean {
  return React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type === "div" ||
        child.type === "pre" ||
        child.type === createImage ||
        child.type === Media),
  );
}

function createParagraph({ children }: { children: ReactNode }) {
  if (hasBlockChildren(children)) {
    return (
      <div className="mt-2 mb-3 leading-7 text-font-primary">
        {children}
      </div>
    );
  }
  return (
    <p className="mt-2 mb-3 leading-7 text-font-primary">
      {children}
    </p>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
      {children}
    </code>
  );
}

function createCodeBlock(props: any) {
  if (props.children?.props?.className) {
    const { className, children } = props.children.props;
    const language = className.replace("language-", "");

    return (
      <div className="relative mt-2 mb-4 rounded-lg border bg-muted">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <span className="text-xs text-font-primary capitalize">{language}</span>
          <CopyButton text={children} />
        </div>
        <pre className="overflow-x-auto p-4">
          <code className="text-sm font-mono">{children}</code>
        </pre>
      </div>
    );
  }

  return <pre {...props} />;
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

function createList(as: "ul" | "ol") {
  return ({ children }: { children: ReactNode }) => {
    const Tag = as;
    return (
      <Tag className={as === "ol" ? "list-decimal pl-6 my-2" : "list-disc pl-6 my-2"}>
        {children}
      </Tag>
    );
  };
}

function createListItem({ children }: { children: ReactNode }) {
  return (
    <li className="mt-1 mb-2 leading-7">
      {children}
    </li>
  );
}

function createHR() {
  return (
    <div className="flex w-full justify-center my-8">
      <Separator className="max-w-[10rem]" />
    </div>
  );
}

// Direct MDX component exports
function Heading({ children, as = "h2", ...props }: { children: ReactNode; as?: string; [key: string]: any }) {
  const Tag = as as any;
  return <Tag className="font-bold tracking-tight font-[family-name:var(--font-heading)]" {...props}>{children}</Tag>;
}

function Text({ children, as = "p", ...props }: { children: ReactNode; as?: string; [key: string]: any }) {
  const Tag = as as any;
  return <Tag className="text-font-secondary" {...props}>{children}</Tag>;
}

function CodeBlock({ codes, copyButton }: { codes: { code: string; language: string; label: string }[]; copyButton?: boolean }) {
  return (
    <div className="mt-2 mb-4 rounded-lg border bg-muted">
      {codes.map((item, i) => (
        <div key={i}>
          <div className="flex items-center justify-between border-b px-4 py-2">
            <span className="text-xs text-font-secondary">{item.label}</span>
            {copyButton && <CopyButton text={item.code} />}
          </div>
          <pre className="overflow-x-auto p-4">
            <code className="text-sm font-mono">{item.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}

function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
      {children}
    </code>
  );
}

function MdxAccordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <ShadAccordion type="single" collapsible>
      <AccordionItem value="item">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </ShadAccordion>
  );
}

function AccordionGroup({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

function Table({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return (
    <div className="my-4 w-full overflow-x-auto">
      <table className="w-full border-collapse border text-sm" {...props}>{children}</table>
    </div>
  );
}

function Feedback({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return <div className="my-4 rounded-lg border bg-muted/50 p-4" {...props}>{children}</div>;
}

function Grid({ children, columns = "2", ...props }: { children: ReactNode; columns?: string; [key: string]: any }) {
  const colMap: Record<string, string> = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };
  return <div className={`grid gap-4 ${colMap[columns] || "grid-cols-2"}`} {...props}>{children}</div>;
}

function Row({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return <div className="flex flex-row items-center gap-4" {...props}>{children}</div>;
}

function Column({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return <div className="flex flex-col gap-4" {...props}>{children}</div>;
}

function MdxIcon({ name, ...props }: { name: string; [key: string]: any }) {
  return <Icon name={name as any} {...props} />;
}

function Media({ src, alt, ...props }: { src: string; alt?: string; [key: string]: any }) {
  return (
    <LightboxImage src={src} alt={alt || ""} />
  );
}

function SmartLink({ href, children, ...props }: { href: string; children: ReactNode; [key: string]: any }) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80" {...props}>{children}</a>;
  }
  return <Link href={href} className="text-primary underline underline-offset-4 hover:text-primary/80" {...props}>{children}</Link>;
}

const components = {
  p: createParagraph as any,
  h1: createHeading(1) as any,
  h2: createHeading(2) as any,
  h3: createHeading(3) as any,
  h4: createHeading(4) as any,
  h5: createHeading(5) as any,
  h6: createHeading(6) as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  ol: createList("ol") as any,
  ul: createList("ul") as any,
  li: createListItem as any,
  hr: createHR as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion: MdxAccordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card: ({ children, ...props }: any) => <Card {...props}><CardContent>{children}</CardContent></Card>,
  Grid,
  Row,
  Column,
  Icon: MdxIcon,
  Media,
  SmartLink,
  blockquote: Blockquote,
  Figure,
  Callout,
  TLDR,
  BadgeGroup,
  Stat,
  Timeline,
  Embed,
  Tabs,
  Tab,
  BeforeAfter,
  Video,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return <MDXRemote options={{ blockJS: false }} {...props} components={{ ...components, ...(props.components || {}) }} />;
}
