import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "/src/assets/data/blog");

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = [];

  for (const file of files) {
    const slug = file.replace(".md", "");
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);

    posts.push({
      slug,
      ...data,
      content: processedContent,
      rawContent : content
    });
  }
  return posts
}
