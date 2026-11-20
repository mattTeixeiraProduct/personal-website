import type { WritingPost } from "@/types";

const IMG = "/images/writing/agent-first-playbook";

const post: WritingPost = {
  metadata: {
    title: "The Agent-First Playbook for B2B Products",
    summary:
      "If your customer could get your product's main outcome by asking Claude, would they still pay you? A 6-step playbook for rethinking a B2B product now that agents do the work.",
    publishedAt: "2026-11-19",
    tag: "Product",
    image: `${IMG}-0.png`,
    imageLight: `${IMG}-cover-light.webp`,
  },
  sections: [
    {
      type: "paragraph",
      text: "Here's a question worth sitting with.",
    },
    {
      type: "paragraph",
      text: "If your customer could get your product's main outcome by asking Claude, would they still pay you?",
    },
    {
      type: "paragraph",
      text: "If you hesitated, this article is for you.",
    },
    {
      type: "paragraph",
      text: "AI changed how products get built, bought and used. But most product teams still run the old playbook: spot a problem, design a screen, ship a feature.",
    },
    {
      type: "paragraph",
      text: "In this article, I'll walk you through how I think about product now. Where your product stands, which jobs to keep, what outcome to chase, and how to shape a roadmap where agents do the work.",
    },
    {
      type: "heading",
      text: "Access from your agent",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Copy this prompt into Claude or ChatGPT and apply the playbook to your own product.",
    },
    {
      type: "prompt",
      title: "Apply the whole playbook",
      text: `Read this article: https://mattteixeira.com/writing/agent-first-playbook

It's a 6-step playbook for rethinking a B2B product now that AI agents do the work.

My product: [what it does, who it's for, and what customers pay for]

Walk me through the playbook applied to my product, one step at a time. For each step:
1. Explain the idea in 2-3 sentences
2. Ask me the questions you need answered
3. Give me your verdict and one action I can take this week

Start with "How to Know Where Your Product Stands". Wait for my answers before moving to the next step.`,
    },
    {
      type: "paragraph",
      text: "I'm in a rare intersection in product:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Product designer by trade",
        "Did a lot of product management, both in startups and in my own commercial apps",
        "5 years of coding",
      ],
    },
    {
      type: "paragraph",
      text: "I've also been building agentic experiences for 24 months. That's plenty of time to make mistakes and learn from them.",
    },
    {
      type: "paragraph",
      text: "Back in the day it was chat completion, there was no reasoning, and Anthropic was barely a company.",
    },
    {
      type: "paragraph",
      text: "It shows in what I've built. [Deck](https://getdeck.io) has **92% monthly retention**, and usage keeps climbing. Retention is the metric I worry about most.",
    },
    {
      type: "paragraph",
      text: "This playbook is meant to be as timeless as possible. That's not easy right now. AI changes fast.",
    },
    {
      type: "paragraph",
      text: "Here's what you'll do by the end:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Learn whether your product's value is enough to survive the labs",
        "Map the jobs your users do today",
        "Climb to the real outcome your customers pay for",
        "Ask \"Why not an agent?\" for every feature on your roadmap",
        "Make your product usable by agents",
        "Measure success the way agents use your product",
      ],
    },

    // ---- What Actually Changed? ----
    {
      type: "heading",
      text: "What Actually Changed?",
      level: 2,
    },
    {
      type: "paragraph",
      text: "AI is **\"simply\"** a new capability. That's the only change - at least in the first order.",
    },
    {
      type: "paragraph",
      text: "It lets us solve old problems with new solutions:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Email.** You've always struggled to sort your inbox. Agents give you a new solution to an old problem.",
        "**Nutrition.** I used MyFitnessPal to track my macros. Now I just tell my Nutrition Coach agent. It tracks for me and tells me what to improve.",
        "**Questions.** Humans have always had questions. Google beat encyclopedias. AI chatbots now beat Google with hyper-personalized answers.",
      ],
    },
    {
      type: "figure",
      src: `${IMG}-2.png`,
      srcLight: `${IMG}-2-light.webp`,
      alt: "Old way versus agent way for email, nutrition and questions",
    },
    {
      type: "paragraph",
      text: "There are second-order effects too, but we'll leave those out for now.",
    },
    {
      type: "paragraph",
      text: "Here's what to remember: **every problem that's already been solved now has a 100x more efficient solution.**",
    },

    // ---- What Does That Mean for Your Product? ----
    {
      type: "heading",
      text: "What Does That Mean for Your Product?",
      level: 2,
    },
    {
      type: "paragraph",
      text: "If every problem can be solved faster, better and cheaper, every business is up for grabs. Tobi Lütke (Shopify's founder) [said this about 2026](https://youtu.be/ZSM2uFnJ5bs?t=7622&si=v2y2l5kJeHiULNu4) (and beyond), and I agree.",
    },
    {
      type: "paragraph",
      text: "Your product solves a problem. That problem can now be solved better, faster and cheaper with intelligence. Which leaves you with three questions:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Should you expand into new problems?",
        "Which problems should you solve now?",
        "Do all current problems your product solves still need solving through a product? Or can it be solved through an AI chatbot?",
      ],
    },
    {
      type: "paragraph",
      text: "The third question is the most impactful one. Not every problem from the past needs a product anymore, because agents absorb a lot of that work.",
    },
    {
      type: "paragraph",
      text: "Take status updates. I hate how they're done today. But that doesn't mean Jira needs a better status update feature. You can run a status update workflow in Claude, post it to Slack, and move on.",
    },
    {
      type: "paragraph",
      text: "So should Jira improve status updates in the UI? Only if it can do a much better job than the labs can in their own UI.",
    },
    {
      type: "heading",
      text: "SaaS (That Makes Humans Do the Work) Is Dead",
      level: 3,
    },
    {
      type: "paragraph",
      text: "We've all heard that SaaS is dead. That's not true.",
    },
    {
      type: "paragraph",
      text: "[Matthew McConaughey](https://x.com/benioff/status/2093028886800109914/video/1?a=q8TAEamzUi8Vm4rjRXk&s=46) said it best: \"This is the end of software that makes humans do the work.\"",
    },
    {
      type: "paragraph",
      text: "Great news - unless your software still needs a human to do manual work to deliver its promise. Then it'll be less relevant in 5 years and (yes) dead in 10.",
    },
    {
      type: "paragraph",
      text: "That doesn't mean you need AI inside your app. It means your app has to let agents do the work, so the humans directing those agents get the outcome you promised.",
    },
    {
      type: "blockquote",
      text: "**Agents do the work. Humans reap the benefits.**",
      size: "large",
    },
    {
      type: "paragraph",
      text: "Later, I'll cover how to keep an edge against the labs. That matters for the product. Right now, it matters just as much for perception.",
    },

    // ---- How to Know Where Your Product Stands ----
    {
      type: "heading",
      text: "How to Know Where Your Product Stands",
      level: 2,
    },
    {
      type: "paragraph",
      text: "Is your product gone in 10 years? Or will it be needed more than ever?",
    },
    {
      type: "paragraph",
      text: "I use two quick tests to find out.",
    },
    {
      type: "figure",
      src: `${IMG}-3.png`,
      srcLight: `${IMG}-3-light.webp`,
      alt: "Decision tree: is your outcome offline or online, then horizontal or vertical, then tied or not tied to a business outcome",
    },
    {
      type: "heading",
      text: "Test 1: Check If Your Outcome Is Offline or Online",
      level: 3,
    },
    {
      type: "paragraph",
      text: "If your outcome happens offline, you're safer. Not safe.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Airbnb.** Anyone can vibe code Airbnb's UI. It doesn't matter. Airbnb's biggest value is the stays around the world that no other company owns.",
        "**Mortgage brokers.** The outcome is money to buy a dream home. That's offline.",
      ],
    },
    {
      type: "paragraph",
      text: "Safer doesn't mean untouched. Users can still reach your outcome faster through AI. A mortgage provider with an MCP server will likely beat the ones without one.",
    },
    {
      type: "paragraph",
      text: "It doesn't let you off the hook on AI either. Every user weighs the friction of your product against asking Claude to do the same task. If Claude is easier, they'll use Claude.",
    },
    {
      type: "paragraph",
      text: "Don't forget what I said earlier: every business is up for grabs. A business providing a similar value to yours that uses AI to be more efficient, have a lower headcount, and provide more value will win. Everyone is reassessing everything right now.",
    },
    {
      type: "heading",
      text: "Test 2: Check If You're Horizontal or Vertical",
      level: 3,
    },
    {
      type: "paragraph",
      text: "If your outcome is online, ask whether you're a horizontal or a vertical product.",
    },
    {
      type: "paragraph",
      text: "**Horizontal.** Systems of record like Databricks and Snowflake are safer. A great data warehouse with everything they provide on top takes years to build, and labs can't just ship one. But they sit on top of AWS, Azure and Google Cloud. If those clouds become agent-friendly through APIs and MCPs, what does the layer on top still add? Every horizontal product has to answer that question.",
    },
    {
      type: "paragraph",
      text: "**Vertical.** In my view, vertical AI companies will have the biggest wins. The question is how tightly you're tied to a business outcome. Keep in mind I'm biased. Deck is a vertical AI startup.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Not tied:** Miro doesn't drive a specific business outcome. That makes it easier to reproduce. As I write this, Claude just launched Claude Whiteboards.",
        "**Tied:** Meta Ads isn't going anywhere. It delivers what every company needs: customers.",
        "**Questioned:** Jira and Linear. People ask if project management is needed when \"building is nearly free\". You always need coordination, whether it's humans, agents or both. They get questioned because no business outcome is tied to them. And it's fair.",
      ],
    },
    {
      type: "paragraph",
      text: "**Copy this prompt into Claude or ChatGPT:**",
    },
    {
      type: "prompt",
      title: "Where does your product stand?",
      text: `My product: [what it does, who it's for, and what customers pay for]

Run two tests on it:
1. Offline or online: does the outcome my customers pay for happen offline (a stay, a loan, a delivery) or online?
2. If online: is my product horizontal (a general layer, like a data warehouse) or vertical (built for one type of customer)? How directly is it tied to a business outcome my customers report on?

Then tell me plainly how exposed I am to AI labs and AI-native competitors. Rate it low, medium or high, and explain why in 3 bullets.`,
    },

    // ---- The Playbook ----
    {
      type: "heading",
      text: "The Playbook",
      level: 2,
    },
    {
      type: "paragraph",
      text: "The playbook has 6 steps. The first three map where your product is today and what it should really deliver. The last three turn that into a roadmap, open your product to agents, and measure the result.",
    },

    // Step 1
    {
      type: "heading",
      text: "Step 1: Check If Your Value Is Enough",
      level: 3,
    },
    {
      type: "paragraph",
      text: "You can't predict whether a lab will eat you. Disruption rarely comes from where you expect. What you can do is make yourself hard to eat.",
    },
    {
      type: "paragraph",
      text: "When the internet took off in the late 90s, hotels probably saw it as a better way to take bookings. They didn't see Airbnb coming with a completely new business model about 10 years later.",
    },
    {
      type: "paragraph",
      text: "Notice who disrupted the hotels: a new company, not the one that owned the technology. Nobody called \"Internet Inc.\" came after the app layer. AI is different. The labs own the technology, and they're building apps on top of it.",
    },
    {
      type: "paragraph",
      text: "History still gives us one lesson. However big a company gets, it never owns everything for long. IBM owned [70% of the computer industry](https://thechipletter.substack.com/p/how-big-was-ibm) for years. Then came Microsoft, Apple & others. It's how the cycle of business has always worked.",
    },
    {
      type: "heading",
      text: "Win by Being Specific",
      level: 4,
    },
    {
      type: "paragraph",
      text: "Say you sell lead-generation software. Clay is a general sales product: any lead you want, at price X.",
    },
    {
      type: "paragraph",
      text: "Don't compete with Clay by building the same product for the same market. Pick a slice of the market, learn exactly what they need, and build for that.",
    },
    {
      type: "paragraph",
      text: "For example, a lead finder that helps hedge fund analysts contact people at public companies to get insights about those companies.",
    },
    {
      type: "paragraph",
      text: "Is that better than Clay? For busy analysts in hedge funds, you bet it is.",
    },
    {
      type: "paragraph",
      text: "**Copy this prompt into Claude or ChatGPT:**",
    },
    {
      type: "prompt",
      title: "Find a customer you can win",
      text: `My product: [what it does, who it's for, and what customers pay for]
My closest general competitor: [e.g. Clay]

1. Be honest: could a general tool, or someone using Claude or ChatGPT with the right connectors, deliver my core outcome today?
2. Suggest 3 specific customer segments I could serve so well that a general tool can't match me. For each, name the job they need done and why a general tool falls short.`,
    },

    // Step 2
    {
      type: "heading",
      text: "Step 2: Map Your Current Jobs",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Every app has jobs the user must do to get the promise your app makes.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Linear:** create projects, split them into milestones, break down issues, add dates, assign owners. All to manage projects well. *Think for later: why does a company need to manage its projects well? What's the value of that?*",
        "**Deck:** add customer feedback, metrics and app context, prioritize pain points, brainstorm solutions. All to build a better product.",
        "**Notion:** create databases, spaces and wikis, share docs, comment on others' work. All to manage company knowledge.",
      ],
    },
    {
      type: "paragraph",
      text: "Until recently, a human did every one of these jobs. Now these apps are agent-friendly. Agents do the jobs. Humans still benefit from the outcome of those jobs being performed - when performed optimally.",
    },
    {
      type: "heading",
      text: "How to Map Your Jobs",
      level: 4,
    },
    {
      type: "paragraph",
      text: "The goal is to record what your user has to do to get your app's benefits.",
    },
    {
      type: "paragraph",
      text: "Go deep. A new capability means you should second-guess everything. These jobs only look the way they do because we designed them for the old way of solving problems.",
    },
    {
      type: "paragraph",
      text: "For example, should humans still manage tickets? With coding agents this good, do we need to manage projects at that level of detail? Is it not better to forget tickets completely and focus on milestones instead?",
    },
    {
      type: "paragraph",
      text: "The mapping itself is the easy part. Ask your AI agent to do it, using a framework like Jobs to Be Done.",
    },
    {
      type: "paragraph",
      text: "**Copy this prompt into Claude or ChatGPT:**",
    },
    {
      type: "prompt",
      title: "Map your jobs",
      text: `My product: [what it does, who it's for, and what customers pay for]

Map the jobs my users do in my product, using the Jobs to Be Done framework. Ask me questions if you need to. If you can access my website, docs or help center, read them first.

Organize the jobs in three levels:
1. Main job: the outcome my customer pays for
2. Supporting jobs: what users do to get there
3. Micro-tasks: the small steps inside each supporting job (filling a field, picking from a dropdown, fixing an error)

Then put every supporting job and micro-task in a table:
- Job
- Who does it today (human, agent or both)
- Could an agent do it? (yes, partly, no)
- Decision (keep, hand off to an agent, or delete)

Be skeptical. Question every job that isn't the main job.`,
    },
    {
      type: "figure",
      src: `${IMG}-4.png`,
      alt: "Table of jobs showing who does each today, whether an agent could do it, and a keep, hand off or delete decision",
    },
    {
      type: "heading",
      text: "Kill the Micro-Tasks First",
      level: 4,
    },
    {
      type: "paragraph",
      text: "Low-level jobs are usually the ones agents don't need. Think about all the edge cases in your UI: dropdowns, required fields, format rules.",
    },
    {
      type: "paragraph",
      text: "Take a CSV upload. The traditional way: you ask the user to use specific column names. You validate them. You handle every CSV error. When something's wrong, the user downloads the file again, renames the columns and resubmits. Painful.",
    },
    {
      type: "paragraph",
      text: "With an agent, you have two better options:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Free-form upload.** The user drops the CSV in. An agent maps their columns to your schema in the background.",
        "**A prompt in the dialog.** Show \"Copy this into your agent to turn your spreadsheet into the format we need.\" You only ask the user to retry if the schema is still wrong.",
      ],
    },
    {
      type: "paragraph",
      text: "Count how many micro-tasks just disappeared.",
    },
    {
      type: "paragraph",
      text: "Now notice what they were serving. Uploading a CSV is a micro-task inside a bigger job: getting bulk payments into your accounting platform. That job serves a bigger one again: producing an income statement for tax reporting.",
    },
    {
      type: "paragraph",
      text: "Kill the micro-tasks. Keep the jobs above them.",
    },
    {
      type: "heading",
      text: "How the Model Ate Jobs at Deck",
      level: 4,
    },
    {
      type: "paragraph",
      text: "Processing user interviews was Deck's first feature. We used to ask users for:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "The research goal",
        "The questions asked in the interview (discussion guide)",
        "Special instructions",
      ],
    },
    {
      type: "paragraph",
      text: "Those could have been jobs today still. But they're not. Instead, we iterated twice:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**January 2026:** we stopped asking. Models were smart enough to figure all three out. We still passed the goal and questions to the main synthesizer behind the scenes.",
        "**August 2026:** we stopped passing any information to the model (which also meant we didn't need to ask). When Sonnet 5 launched, it could synthesize interviews with the same quality without any of those points of context.",
      ],
    },
    {
      type: "paragraph",
      text: "That's why I'm skeptical of every job that isn't the main outcome. They're all just means to an end. Keep second-guessing and trying to remove everything that's not the outcome you provide.",
    },

    // Step 3
    {
      type: "heading",
      text: "Step 3: Climb to Your Real Outcome",
      level: 3,
    },
    {
      type: "paragraph",
      text: "You've mapped your jobs. Now ask: combined, what do they enable? What business outcome do they make possible?",
    },
    {
      type: "paragraph",
      text: "I use the **\"So what?\" ladder**.",
    },
    {
      type: "paragraph",
      text: "**Personal example.** On MyFitnessPal, my job was scanning labels and tracking macros. That's not what I wanted. I wanted to lose weight, gain muscle and get healthier. My Nutrition Coach agent tracks my macros and tells me which meals I'm getting wrong. It gets me much closer to what I actually wanted. And there's no static UI, just me taking photos of barcodes and my coach tracking me and sending me what I can eat to improve on the next day.",
    },
    {
      type: "paragraph",
      text: "**[Deck](https://getdeck.io) example.** When I started thinking about Deck in June 2025, the value was simple: put all your feedback sources in one place, and use AI to organize it so product and design teams could solve their customers' pain points.",
    },
    {
      type: "paragraph",
      text: "As we went through alpha and private beta, that wasn't an appealing enough positioning for two reasons:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Users barely interacted with the product.** Our agents would do all the heavy lifting for the synthesis and organization. Users would just 'read' it. We'd get very positive feedback, but I was confident that if that is your product, it won't have a lasting advantage. You really want people to create data in the product - not just agents.",
        "**I was selling to the wrong person.** I'd built for designers. But in most companies, design reports into product. Heads of design can propose; they're rarely the final decision maker. And the positioning wasn't valuable enough for a head of product.",
      ],
    },
    {
      type: "paragraph",
      text: "Bret Taylor talks a lot about outcome-focused products, and I have to give him credit here. It got me thinking much more about how Deck could become an outcome-driven product.",
    },
    {
      type: "heading",
      text: "Example: Deck's \"So What?\" Ladder",
      level: 4,
    },
    {
      type: "figure",
      src: `${IMG}-5.png`,
      srcLight: `${IMG}-5-light.webp`,
      alt: "So what? ladder: customer feedback helps teams know the customer, teams prioritize the right pain points, customers stay longer and spend more, LTV goes up",
    },
    {
      type: "paragraph",
      text: "Customer feedback helps product teams get to know the customer.",
    },
    {
      type: "paragraph",
      text: "**So what?**",
    },
    {
      type: "paragraph",
      text: "They know which pain points customers want solved, and prioritize accordingly.",
    },
    {
      type: "paragraph",
      text: "**So what?**",
    },
    {
      type: "paragraph",
      text: "When the right problems get solved, customers stay longer and spend more.",
    },
    {
      type: "paragraph",
      text: "**So what?**",
    },
    {
      type: "paragraph",
      text: "LTV goes up. And acquisition gets cheaper, because word of mouth kicks in. Because the product is better.",
    },
    {
      type: "paragraph",
      text: "So:",
    },
    {
      type: "paragraph",
      text: "Consolidating feedback was a means to an end. The real outcome: **help teams build better products.** That means helping them:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Prioritize the right things",
        "Build the right solutions",
        "Understand their customer",
        "Know what to iterate on",
        "Track success",
      ],
    },
    {
      type: "paragraph",
      text: "Feedback is now one part of what we do. An important part, but not our promise.",
    },
    {
      type: "paragraph",
      text: "The catch then is: the set of jobs we had to solve grew tremendously - but we're using agents to solve them.",
    },
    {
      type: "paragraph",
      text: "We could have gone horizontal instead: take in all of a company's knowledge and make it available to sales, marketing and every other team that benefits from customer knowledge. We chose vertical.",
    },
    {
      type: "paragraph",
      text: "**Copy this prompt into Claude or ChatGPT:**",
    },
    {
      type: "prompt",
      title: "Run the \"So what?\" ladder",
      text: `My product's main job: [e.g. consolidating customer feedback]

Run the "So what?" ladder on it. Start with what my product does, then ask "So what?" and answer it. Repeat until you reach a business metric my customers report to their leadership (revenue, retention, LTV or cost).

Show each step of the ladder. Then write my real outcome in one sentence, and list the new jobs I'd need to solve to deliver it.`,
    },

    // Step 4
    {
      type: "heading",
      text: "Step 4: Ask \"Why Not an Agent?\" for Every Feature",
      level: 3,
    },
    {
      type: "paragraph",
      text: "You now have two pieces:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Your product's current jobs",
        "A higher-level outcome to chase, which likely brings new jobs",
      ],
    },
    {
      type: "paragraph",
      text: "Here's how to turn them into a roadmap.",
    },
    {
      type: "paragraph",
      text: "I've heard people say: \"Don't think too much about AI. Just solve customer problems.\"",
    },
    {
      type: "paragraph",
      text: "That's the right goal. But if that's all you think, you'll fall back on what you know: design a UI for the problem.",
    },
    {
      type: "paragraph",
      text: "So for every feature on your roadmap, every problem, every opportunity, ask one question:",
    },
    {
      type: "paragraph",
      text: "**Why this solution? Why not an agent?**",
    },
    {
      type: "paragraph",
      text: "Your customer will want the agent, because it's much easier. Make yourself justify static UI over an agent that uses your features to get a better, faster, cheaper result.",
    },
    {
      type: "paragraph",
      text: "\"Why not an agent?\" is a thinking exercise, not a rule. You can still ship static UI. The point is to train your team to brainstorm agent solutions first, because we'll all use more agents tomorrow than we do today.",
    },
    {
      type: "heading",
      text: "Example: Deck Bots",
      level: 4,
    },
    {
      type: "paragraph",
      text: "Forcing this question changed how I build more than anything else. It led to our most impactful feature so far: Deck Bots - still in closed beta, join the waitlist [here](https://getdeck.io/features/custom-agents).",
    },
    {
      type: "paragraph",
      text: "Deck Bots aren't a feature with agentic capabilities. They're a team of agents with features at their disposal, working toward the customer's outcome.",
    },
    {
      type: "paragraph",
      text: "The difference matters. Start from \"I have this UI, let's add AI\" and you will end up with a chatbot in the corner, or summarization and web search. Start from the agent, and your features become its tools.",
    },
    {
      type: "figure",
      src: `${IMG}-6.png`,
      srcLight: `${IMG}-6-light.webp`,
      alt: "UI plus AI, a dashboard with a chat bubble, versus Agent plus Tools, an agent at the center connected to its tools",
    },
    {
      type: "paragraph",
      text: "**Copy this prompt into Claude or ChatGPT:**",
    },
    {
      type: "prompt",
      title: "Why not an agent?",
      text: `My roadmap: [paste the features or problems you plan to work on]
My product's real outcome: [your one-sentence outcome from Step 3]

For each item, ask: "Why this solution? Why not an agent?"

Give me a table with:
- Item
- How it's planned today
- What an agent version would look like (what it would do, and which of my product's features it would use as tools)
- Your recommendation (static UI, agent, or both) and why`,
    },

    // Step 5
    {
      type: "heading",
      text: "Step 5: Make Your Product Usable by Agents",
      level: 3,
    },
    {
      type: "paragraph",
      text: "This is the easiest win in the playbook. If your customers' agents can't use your product, they'll find one they can.",
    },
    {
      type: "paragraph",
      text: "The fastest way there is an MCP server. But a great MCP server isn't an API with a new name.",
    },
    {
      type: "heading",
      text: "Design for Intent, Not Endpoints",
      level: 4,
    },
    {
      type: "paragraph",
      text: "An API exposes endpoints. Create a record. Update a field. Fetch a list. A developer stitches them together.",
    },
    {
      type: "paragraph",
      text: "An agent shouldn't have to. A great MCP server is designed around what the user is trying to get done: their journey through your app, not your database tables.",
    },
    {
      type: "paragraph",
      text: "That's a shift in mindset. You stop asking \"what can a developer call?\" and start asking \"what is the user trying to finish?\"",
    },
    {
      type: "paragraph",
      text: "[This article](https://medium.com/@kumaran.isk/intent-first-mcp-design-why-good-apis-make-bad-mcp-servers-61379303240e) is a great read on it (and this also helps with mapping the jobs your user wants to achieve!)",
    },
    {
      type: "heading",
      text: "Our First MCP Server Looked Like an API",
      level: 4,
    },
    {
      type: "paragraph",
      text: "We learned this the hard way at Deck. Our first MCP server mirrored our API. Agents had to make tool call after tool call to finish simple tasks.",
    },
    {
      type: "paragraph",
      text: "When we dug in, we found guidance on how to build a good MCP server and switched to intent-driven design: fewer tools, each shaped around something the user wants done. Our MCP server got dramatically better.",
    },
    {
      type: "paragraph",
      text: "**Copy this prompt into Claude or ChatGPT:**",
    },
    {
      type: "prompt",
      title: "Design an intent-driven MCP",
      text: `My product: [what it does, who it's for, and what customers pay for]
My API endpoints or MCP tools today: [paste the list]

1. List the 5 most common things my users try to get done in my product (their intents).
2. For each intent, count how many of my current endpoints or tools an agent would need to call to finish it.
3. Propose an intent-driven MCP tool set: fewer tools, each named after what the user wants to get done, with its inputs and what it returns.
4. Flag anything an agent still can't do without a human opening my app.`,
    },

    // Step 6
    {
      type: "heading",
      text: "Step 6: Measure Success Differently",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Measuring agent value is new, and we're still learning how to do it well. But we notice these already:",
    },
    {
      type: "paragraph",
      text: "**Expect agent numbers to dwarf UI numbers.** Agents can trigger thousands of events in seconds, and they will use your app. Don't panic when MCP events are much higher than UI events. Don't celebrate either. Agent usage isn't human usage.",
    },
    {
      type: "paragraph",
      text: "**Many ways to measure value are not relevant anymore.** Time in app? Absolutely irrelevant in B2B apps now. Please do not refer to it in your decks.",
    },
    {
      type: "figure",
      src: `${IMG}-7.png`,
      srcLight: `${IMG}-7-light.webp`,
      alt: "Chart of MCP events growing far faster than UI events over weeks, annotated: usage isn't necessarily value",
    },

    // Wrap up
    {
      type: "heading",
      text: "The Whole Playbook in 6 Steps",
      level: 2,
    },
    {
      type: "figure",
      src: `${IMG}-8.png`,
      srcLight: `${IMG}-8-light.webp`,
      alt: "The B2B AI Product Playbook: check if your value is enough, map your current jobs, climb to your real outcome, ask why not an agent, make your product usable by agents, measure success differently",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Check your value.** Could a lab or a general tool eat you? Get specific.",
        "**Map your jobs.** List everything users do today, and doubt every one.",
        "**Climb to the outcome.** Ask \"so what?\" until you hit a business metric.",
        "**Ask \"Why not an agent?\"** for every feature on your roadmap.",
        "**Make your product usable by agents.** Design your MCP server around intents, not endpoints.",
        "**Measure differently.** Expect agent usage to dwarf human usage, and don't confuse usage with value.",
      ],
    },
    {
      type: "paragraph",
      text: "Agents do the work. Humans reap the benefits. Build for that.",
    },
    {
      type: "paragraph",
      text: "The best time to build AI in your app was when you were born. The second best is right now. More and more startups will come for everyone's lunch, and we need to be on top of it.",
    },
    {
      type: "paragraph",
      text: "If you're a founder or work in a product team and you're looking for a way to build what your customers want, give [Deck](https://getdeck.io) a try. [This link](https://getdeck.io/sign-up?offer=trial) gets you a 14-day free trial (subject to availability) 🚀",
    },
  ],
};

export default post;
