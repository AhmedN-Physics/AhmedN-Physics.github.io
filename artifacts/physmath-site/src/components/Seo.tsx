import { useEffect } from "react";
import { useLocation } from "wouter";
import groups from "@/lib/note-groups.json";
import basePages from "@/lib/seo-pages.json";
import { courses } from "@/lib/courses";
const pages: Record<string, { title: string; description: string }> = {
  ...basePages,
  ...Object.fromEntries(groups.map((group) => [`/notes/category/${group.slug}`, { title: `${group.name} | Ahmed N. Alotaibi`, description: group.description }])),
  ...Object.fromEntries(courses.map((course) => [`/notes/${course.slug}`, {
    title: `${course.name} | Ahmed N. Alotaibi`,
    description: course.description,
  }])),
};

const origin = "https://ahmedn-physics.github.io";

export function Seo() {
  const [location] = useLocation();
  const path = location.replace(/\/+$/, "") || "/";
  const page = pages[path as keyof typeof pages];

  useEffect(() => {
    const title = page?.title ?? "Page Not Found | Ahmed N. Alotaibi";
    const description = page?.description ?? "The requested page could not be found.";
    const url = `${origin}${path === "/" ? "/" : `${path}/`}`;
    document.title = title;

    function meta(attribute: "name" | "property", key: string, value: string) {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = value;
    }

    meta("name", "description", description);
    meta("name", "robots", page ? "index, follow" : "noindex, follow");
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (page) {
      meta("property", "og:url", url);
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [page, path]);

  return null;
}
