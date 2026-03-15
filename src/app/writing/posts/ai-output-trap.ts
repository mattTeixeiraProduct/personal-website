import type { WritingPost } from "@/types";

const post: WritingPost = {
  metadata: {
    title: "The LLM Baseline Quality Trap",
    summary:
      "Even as a designer who believes great products only exist because of great experience design, I nearly fell for the 'AI did a good enough job — just build it' trap.",
    publishedAt: "2025-01-20",
    tag: "Working with LLMs",
  },
  sections: [
    {
      type: "paragraph",
      text: "Even as a designer who believes great products only exist because of great experience design, I nearly fell for the \"AI did a good enough job — just build it\" trap.",
    },
    {
      type: "paragraph",
      text: "A few weeks ago, I was designing a way for Deck to consolidate and analyze all of a company's NPS scores.",
    },
    {
      type: "paragraph",
      text: "I started by creating the databases, backend, and logic for identifying NPS scores in incoming feedback data. Only then did I move to the frontend and explore designs.",
    },
    {
      type: "paragraph",
      text: "I wanted to ship in two days.",
    },
    {
      type: "paragraph",
      text: "For the frontend, I convinced myself: \"The real value comes from Deck identifying, synthesizing, and organizing the NPS data. Users just need to land on the page and read everything to grasp what their customers like and don't like.\"",
    },
    {
      type: "paragraph",
      text: "That was a trap.",
    },
    {
      type: "figure",
      src: "/images/writing/ai-output-trap.png",
      alt: "Initial NPS dashboard design that fell into the AI output trap",
    },
    {
      type: "paragraph",
      text: "I convinced myself that the output the model showed me (based on some very simple designs) was enough to meet my quality bar. And I fell for it.",
    },
    {
      type: "paragraph",
      text: "I call it the \"AI Output Trap\": tricking yourself into accepting what the LLM produced, justifying it as enough because the true value comes from the AI synthesis.",
    },
    {
      type: "paragraph",
      text: "But it wasn't enough.",
    },
    {
      type: "paragraph",
      text: "If the frontend doesn't have great design that properly delivers the LLM's output, no value is added. Only noise.",
    },
    {
      type: "paragraph",
      text: "Also: we can shape LLM output any way we want. The LLM will never be the blocker to good design.",
    },
    {
      type: "paragraph",
      text: "It can, however, become the benchmark companies hold themselves to. When humans work in groups, groupthink is always at play. And for some reason, the default thinking in most companies is \"let's meet the minimum possible\" rather than \"let's do the absolute best we can.\"",
    },
    {
      type: "paragraph",
      text: "I had to force myself to throw the design away and start from scratch. Twice. That was hard.",
    },
    {
      type: "paragraph",
      text: "I do believe this will be a big challenge of the future. Just because design and code are so easy to produce, people will accept the basics and move on.",
    },
    {
      type: "paragraph",
      text: "Mostly, it has always been this way. There's no reason to change now just because AI appeared.",
    },
    {
      type: "paragraph",
      text: "Part of your job as a builder will be to have standards high enough to say: \"No. I won't accept this because I can do better. The LLM can do better if I give it great context.\"",
    },
    {
      type: "paragraph",
      text: "In my opinion, this will be a huge competitive advantage for future companies.",
    },
    {
      type: "paragraph",
      text: "The best part? This entire battle happened in five days total. Three days initially, then two extra days to discard and rebuild with improved design. Considering how long this would have taken without AI, that's nothing.",
    },
    {
      type: "paragraph",
      text: "The mind was the trap. The willingness to accept average just to ship the next thing and get the next \"output high\".",
    },
    {
      type: "paragraph",
      text: "Don't fall for it. Battle your mind. Win the AI Output Trap.",
    },
  ],
};

export default post;
