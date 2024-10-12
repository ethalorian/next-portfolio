import { getPostData, getSortedPostsData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import Header from '../../../components/header';

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
    <Header />
    <div className="prose prose-lg max-w-prose mx-auto prose-invert text-high-contrast my-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-high-contrast">{post.title}</h1>
      <ReactMarkdown 
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        className="text-high-contrast"
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