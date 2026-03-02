import React from "react";
import Link from "next/link";

/**
 * Parse inline markdown (bold, italic, code, links) into React nodes.
 * Handles: **bold**, *italic*, `code`, [text](url)
 */
export function renderInline(text: string): React.ReactNode {
  // Regex matches in priority order: links, bold, inline code, italic
  const pattern =
    /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|`([^`]+)`|\*([^*]+)\*/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    // Push preceding plain text
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      // Link: [text](url)
      const href = match[2];
      const isExternal = href.startsWith("http");
      if (isExternal) {
        parts.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {match[1]}
          </a>,
        );
      } else {
        parts.push(
          <Link
            key={key++}
            href={href}
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {match[1]}
          </Link>,
        );
      }
    } else if (match[3] !== undefined) {
      // Bold: **text**
      parts.push(<strong key={key++}>{match[3]}</strong>);
    } else if (match[4] !== undefined) {
      // Inline code: `text`
      parts.push(
        <code
          key={key++}
          className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
        >
          {match[4]}
        </code>,
      );
    } else if (match[5] !== undefined) {
      // Italic: *text*
      parts.push(<em key={key++}>{match[5]}</em>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Push remaining plain text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}
