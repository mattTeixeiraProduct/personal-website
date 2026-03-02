"use client";

import React from "react";
import { createPortal } from "react-dom";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  if (!about.tableOfContent.display || !mounted) return null;

  return createPortal(
    <div
      className="fixed left-0 hidden md:flex flex-col gap-8 pl-6 z-40"
      style={{ top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap" }}
    >
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-3">
            <button
              onClick={() => scrollTo(section.title, 80)}
              className="flex items-center gap-2 cursor-pointer transition-transform hover:translate-x-1"
            >
              <span className="h-px w-4 bg-foreground" />
              <span className="text-base">{section.title}</span>
            </button>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    onClick={() => scrollTo(item, 80)}
                    className="hidden lg:flex items-center gap-3 pl-6 cursor-pointer transition-transform hover:translate-x-1"
                  >
                    <span className="h-px w-2 bg-foreground" />
                    <span className="text-base">{item}</span>
                  </button>
                ))}
              </>
            )}
          </div>
        ))}
    </div>,
    document.body
  );
};

export default TableOfContents;
