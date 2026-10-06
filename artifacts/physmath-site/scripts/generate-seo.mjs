// Give GitHub Pages a real HTML entry for each route and route-specific metadata.
import { readFile, writeFile, mkdir } from "node:fs/promises";

const site = new URL("../", import.meta.url);
const output = new URL("dist/public/", site);
const pages = JSON.parse(await readFile(new URL("src/lib/seo-pages.json", site), "utf8"));
const courses = JSON.parse(await readFile(new URL("src/lib/courses.json", site), "utf8"));
for (const course of courses) {
  pages[`/notes/${course.slug}`] = { title: `${course.name} | Ahmed N. Alotaibi`, description: course.description };
}
const groups = JSON.parse(await readFile(new URL("src/lib/note-groups.json", site), "utf8"));
for (const group of groups) {
  pages[`/notes/category/${group.slug}`] = { title: `${group.name} | Ahmed N. Alotaibi`, description: group.description };
}
const template = await readFile(new URL("index.html", output), "utf8");
const origin = "https://ahmedn-physics.github.io";
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const pageUrl = (path) => `${origin}${path === "/" ? "/" : `${path}/`}`;

function render(page, path) {
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`);
  const tags = {
    description: page.description,
    "og:title": page.title,
    "og:description": page.description,
    "twitter:title": page.title,
    "twitter:description": page.description,
    "og:url": pageUrl(path),
  };
  for (const [key, value] of Object.entries(tags)) {
    const pattern = new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*(")`);
    if (!pattern.test(html)) throw new Error(`Missing metadata tag: ${key}`);
    html = html.replace(pattern, (_, start, end) => `${start}${escape(value)}${end}`);
  }
  return html.replace(/(<link rel="canonical" href=")[^"]*(")/, (_, start, end) => `${start}${pageUrl(path)}${end}`);
}

for (const [path, page] of Object.entries(pages)) {
  const directory = new URL(path === "/" ? "./" : `${path.slice(1)}/`, output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), render(page, path));
}

const notFound = render({ title: "Page Not Found | Ahmed N. Alotaibi", description: "The requested page could not be found." }, "/")
  .replace('content="index, follow"', 'content="noindex, follow"')
  .replace(/\s*<link rel="canonical"[^>]*>/, "")
  .replace(/\s*<meta property="og:url"[^>]*>/, "");
await writeFile(new URL("404.html", output), notFound);
await writeFile(new URL("sitemap.xml", output), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map((path) => `  <url><loc>${pageUrl(path)}</loc></url>`).join("\n")}\n</urlset>\n`);
console.log(`Generated ${Object.keys(pages).length} page entries, sitemap, and noindex 404 page.`);
