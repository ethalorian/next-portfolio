import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
}

export interface Post extends PostMetadata {
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

// Check if posts directory exists, create it if it doesn't
if (!fs.existsSync(postsDirectory)) {
  console.warn(`Posts directory not found: ${postsDirectory}`);
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getSortedPostsData(): PostMetadata[] {
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }

  const allPostsData: PostMetadata[] = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title as string,
      date: data.date as string,
      author: data.author as string,
    };
  } catch (error) {
    console.error(`Error reading post file ${slug}:`, error);
    return null;
  }
}