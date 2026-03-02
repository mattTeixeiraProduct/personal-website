interface SchemaMarkupProps {
  as: "webPage" | "blogPosting";
  baseURL: string;
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url: string;
    image: string;
  };
}

export function SchemaMarkup({
  as,
  baseURL,
  path,
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: SchemaMarkupProps) {
  const url = `${baseURL}${path}`;

  const baseSchema = {
    "@context": "https://schema.org",
    name: title,
    description,
    url,
    ...(image && { image: image.startsWith("http") ? image : `${baseURL}${image}` }),
    ...(author && {
      author: {
        "@type": "Person",
        name: author.name,
        url: author.url,
        image: author.image,
      },
    }),
  };

  const schema =
    as === "blogPosting"
      ? {
          ...baseSchema,
          "@type": "BlogPosting",
          headline: title,
          ...(datePublished && { datePublished }),
          ...(dateModified && { dateModified }),
        }
      : {
          ...baseSchema,
          "@type": "WebPage",
        };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
