import type { WritingPost } from "@/types";

const post: WritingPost = {
  metadata: {
    title: "Introducing CapitalClimb \u2014 The Ultimate Stock Research Tool",
    summary:
      "Why I built a consolidated platform to streamline the entire value investing process \u2014 from stock discovery and financial analysis to portfolio management.",
    publishedAt: "2024-07-05",
    tag: "Product",
    image: "/images/writing/capitalclimb-cover.png",
  },
  sections: [
    {
      type: "paragraph",
      text: 'When exposed to Warren Buffett\'s value investing framework \u2014 "buy good businesses at a cheap price and then hold them for a really long time" \u2014 I felt naturally suited to the approach.',
    },
    {
      type: "paragraph",
      text: "The typical steps involved include:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Trying to find potential companies to invest in",
        "Diving deep in reports such as 10-Ks and 10-Qs",
        "Thinking about a competitive advantage",
        "Valuating a company",
      ],
    },
    {
      type: "paragraph",
      text: "All these steps value investors typically perform while searching for cheap and good businesses to allocate capital toward.",
    },
    {
      type: "heading",
      level: 2,
      text: "The Problem",
    },
    {
      type: "paragraph",
      text: 'However, a significant problem existed: all of these steps I had to perform (that most investors usually perform, I should say), were very broken down between different applications as each of these applications would do one thing. This created a segregated, inefficient, and disorganized process.',
    },
    {
      type: "paragraph",
      text: "My investment workflow required multiple tools:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Finviz** to discover/screen stocks",
        "**TradingView** to briefly visualize a company's financial situation",
        "**Notion** to keep track on companies and write evaluation notes",
        "**Excel** to analyze financials further and perform discounted cash flow calculations",
        "**Delta** to visualize and manage portfolio",
      ],
    },
    {
      type: "paragraph",
      text: "Having many applications proved messy and inefficient.",
    },
    {
      type: "heading",
      level: 2,
      text: "The Solution",
    },
    {
      type: "image",
      src: "/images/writing/capitalclimb-cover.png",
      alt: "CapitalClimb",
    },
    {
      type: "paragraph",
      text: '**CapitalClimb** addresses this consolidation need. I created the platform believing better tools should be available to all investors.',
    },
    {
      type: "paragraph",
      text: 'Rather than allocating limited post-work energy to questions like "Where are those notes about that company?" or "What was that company\'s name I looked at this morning?", users should focus on substantive analysis like "I just realized something else about Microsoft\'s long-term competitive advantage."',
    },
    {
      type: "paragraph",
      text: "CapitalClimb aims to be a value investing consolidator, containing every major feature an investor might need during their investment journey. The motivation centers on offering an amazing experience to investors wanting to improve their lives by buying good businesses for a cheap price.",
    },
  ],
};

export default post;
