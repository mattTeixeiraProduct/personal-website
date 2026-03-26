import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { ArrowUpRight } from "lucide-react";

const person: Person = {
  firstName: "Teixeira",
  lastName: "Matt",
  name: `Matt Teixeira`,
  role: "Design Engineer",
  avatar: "/images/avatar.jpeg",
  email: "matt.teixeira@mattteixeira.com",
  location: "Australia/Melbourne",
  languages: ["English", "Portuguese", "Spanish"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mattTeixeiraProduct",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/matt-teixeira/",
    essential: true,
  },
  {
    name: "X",
    icon: "twitter",
    link: `https://x.com/matt_teeixeira`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designer by day, entrepreneur at all other times</>,
  featured: {
    display: true,
    title: (
      <span className="inline-flex items-center gap-3 text-sm">
        <span className="text-font-secondary">Introducing</span>
        <span className="h-5 w-px bg-muted-foreground" />
        <strong className="">Deck</strong>
      </span>
    ),
    href: "/work/capitalclimb",
  },
  subline: (
    <>
      I'm Matt, a designer and software builder who believes passion, craft, and taste are competitive advantages. I currently work as a <a href="https://pay.com.au" target="_blank" rel="noopener noreferrer" className="font-semibold transition-all duration-200 hover:text-primary group">Senior Product Designer at pay.com.au<ArrowUpRight size={14} className="inline-block align-middle ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a> and as the <a href="https://getdeck.io" target="_blank" rel="noopener noreferrer" className="font-semibold transition-all duration-200 hover:text-primary group">Founder at Deck<ArrowUpRight size={14} className="inline-block align-middle ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I love technology. More so, I love to enable humans to have amazing interactions with it. I express that through designing and building experiences that feel custom-made for the user at hand. 
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Deck",
        timeframe: "Aug 2025 - Present",
        role: "Founder",
        achievements: [
          <>
            Deck helps product teams to synthesize and organize their user feedback, ultimately enabling automatic, always-on insights management and a clear, user-centric product roadmap.
          </>,
        ],
        images: [],
      },
      {
        company: "pay.com.au",
        timeframe: "Oct 2024 - Present",
        role: "Senior Product Designer",
        achievements: [
          <>
            Senior Product Designer in the Rewards and US Streams.
          </>,
        ],
        images: [],
      },
      {
        company: "CapitalClimb",
        timeframe: "Nov 2023 - Jun 2025",
        role: "Founder",
        achievements: [
          <>
            Built a fintech SaaS for value investors to analyze companies and make investment decisions.
          </>,
        ],
        images: [],
      },
      {
        company: "News Corp Australia",
        timeframe: "Aug 2023 - Oct 2024",
        role: "Product Designer",
        achievements: [
          <>
            Part of the data visualisation committee: a committee with stakeholders from several groups whose goal is to improve how people interact with data within the Company.
          </>,
          <>
            Researched, designed and implemented optimal comments solution that was adopted by a native app design system with 20+ brands, where average weekly comments increased by 7%.
          </>,
          <>
            Increased 13% average user page views at The Australian native app through designing a feature that leveraged a third-party's algorithm to personalise content recommendation to the user.
          </>,
          <>
            Led the conduction of various research methods (user interviews, usability tests, surveys, etc) to gather insights, refine design solutions, and achieve KPIs.
          </>,
          <>
            Co-led initiatives from research to deployment, collaborating closely with product, engineering, marketing, and editorial teams to ensure buy-in and user-centricity in solutions.
          </>,
          <>
            Conducted feedback and mentoring sessions with younger designers, providing guidance on product and design ideas, communication, stakeholder management, and effective engineering collaboration.
          </>,
        ],
        images: [],
      },
      {
        company: "Safewill",
        timeframe: "Jun 2022 - Aug 2023",
        role: "Product Designer",
        achievements: [
          <>
            Championed and led the design of a feature promoting organic acquisition, coordinating with cross-functional teams for successful launch and generating 9% of sign ups within the first month of release.
          </>,
          <>
            Designed and implemented a partnerships dashboard: collaborated with internal product teams and business stakeholders to deliver a data visualisation product that increased B2B business acquisition by 12%.
          </>,
          <>
            Collaborated with cross-functional stakeholders to release the MVP of the Digital Vault, which exceeded 200% of its user acquisition OKR and demonstrated outstanding early engagement metrics.
          </>,
          <>
            Led the ideation, conceptualisation, and prototyping phases of product development, employing a user-centred design approach and incorporating customer feedback to drive continuous improvement.
          </>,
          <>
            Managed the company's design system by taking into consideration brand identity, visual language, and behavioural science to implement user-friendly components.
          </>,
        ],
        images: [],
      },
      {
        company: "Ambient Food Group",
        timeframe: "May 2021 - Jun 2022",
        role: "UX/UI Designer",
        achievements: [
          <>
            Led the design of a responsive web-based corporate catering eCommerce platform, taking into consideration business goals and user problems through data analysis.
          </>,
          <>
            Conducted extensive user research and gathered feedback from corporate clients to gain insights into their pain points, needs, and preferences, ensuring a customer-centric approach.
          </>,
          <>
            Translated complex business requirements into intuitive user interfaces, employing a user-centred design approach, wireframing, prototyping, and conducting usability testing to validate designs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "King's Own Institute",
        description: <>Bachelor of Business (Finance & Management Major)</>,
      },
      {
        name: "PUCRS (Brazil)",
        description: <>Bachelor of Civil Engineering. Deferred after 4 semesters</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/writing",
  label: "Writing",
  title: "Writing about design, tech and AI",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Showcased Work",
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
