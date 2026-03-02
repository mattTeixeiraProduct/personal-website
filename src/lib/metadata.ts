import type { Metadata } from "next";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  baseURL: string;
  path: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  baseURL,
  path,
  image,
}: GenerateMetadataOptions): Metadata {
  const ogImage = image?.startsWith("http")
    ? image
    : `${baseURL}${image || `/api/og/generate?title=${encodeURIComponent(title)}`}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseURL}${path}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${baseURL}${path}`,
    },
  };
}
