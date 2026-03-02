# Personal Website

Matt Teixeira's personal portfolio website — built with Next.js, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16 (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4 + [shadcn/ui](https://ui.shadcn.com)
- **Content**: MDX for project case studies and writing posts
- **Animations**: [Motion](https://motion.dev) (Framer Motion)
- **Fonts**: Newsreader (heading/body) via `next/font`
- **Theming**: next-themes (light/dark mode)

## Getting Started

**1. Install dependencies**

```bash
npm install
```

**2. Run the dev server**

```bash
npm run dev
```

**3. Edit config**

```
src/resources/config.ts
```

**4. Edit content**

```
src/resources/content.tsx
```

**5. Add projects or writing posts**

```
src/app/work/projects/       — MDX project case studies
src/app/writing/posts/        — Writing posts
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── about/                # About / CV page
│   ├── work/                 # Work portfolio + MDX projects
│   ├── writing/              # Writing posts
│   └── api/rss/              # RSS feed
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── mdx/                  # Custom MDX components (Figure, Callout, Timeline, etc.)
│   ├── about/                # About page components
│   ├── work/                 # Work page components
│   └── writing/              # Writing page components
├── resources/
│   ├── config.ts             # Site config (routes, fonts, effects, schema)
│   └── content.tsx           # Content data (person, social links, pages)
├── lib/                      # Utilities (metadata, cn helper)
└── types/                    # TypeScript types
```

## License

Based on [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) by Once UI and Selene Yu. Thank you for the great initial UI!
