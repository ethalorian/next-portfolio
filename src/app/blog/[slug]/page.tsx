import { getPostData, getSortedPostsData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = getPostData(slug) ?? notFound();

  return (
    <>
    <div className="max-w-prose mx-auto my-8 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-muted-foreground">Written by: {post.author}</p>
      <p className="text-muted-foreground mb-4">Date: {post.date}</p>
      <ReactMarkdown 
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        className="prose dark:prose-invert max-w-none"
      >
        {post.content}
      </ReactMarkdown>
    </div>
    </>
  );
}

// Optional: Add static generation
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}