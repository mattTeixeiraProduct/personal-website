import { getWritingPosts } from "@/utils/writing";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const blogs = getWritingPosts().map((post) => ({
    url: `${baseURL}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Work case studies (src/app/_work) are disabled, so they're not listed here.
  return [...routes, ...blogs];
}
