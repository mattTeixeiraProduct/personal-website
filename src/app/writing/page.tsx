import { Mailchimp } from "@/components";
import { Posts } from "@/components/writing/Posts";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return genMeta({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <div className="w-full pt-6">
      <SchemaMarkup
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/writing`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <h1 className="mb-6 text-3xl text-left font-bold tracking-tight font-[family-name:var(--font-heading)]">
        {blog.title}
      </h1>
      <div className="flex w-full flex-1 flex-col gap-10">
        <Posts range={[1, 10]} thumbnail />
      </div>
    </div>
  );
}
