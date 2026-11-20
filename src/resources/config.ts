import {
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  RoutesConfig,
  SchemaConfig,
  SocialSharingConfig,
} from "@/types";
import { home } from "./index";

// Used for SEO in meta tags, sitemap and schema
const baseURL: string = "https://mattteixeira.com";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": false, // case studies live in src/app/_work (disabled)
  "/writing": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Import and set font for each variant
import { Newsreader } from "next/font/google";

const heading = Newsreader({
  variable: "--font-heading",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const body = Newsreader({
  variable: "--font-body",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const label = Newsreader({
  variable: "--font-label",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const code = Newsreader({
  variable: "--font-code",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 40,
    size: "2",
    color: "static-black",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "",
  type: "Organization",
  name: "Deck",
  description: home.description,
  email: "matt.teixeira@getdeck.io",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  routes,
  baseURL,
  fonts,
  schema,
  socialSharing,
  effects,
};
