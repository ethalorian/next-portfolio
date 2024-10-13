import Link from 'next/link';
import { getSortedPostsData, PostMetadata } from '@/lib/posts';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export default function BlogPage() {
  const posts: PostMetadata[] = getSortedPostsData();

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 px-4 sm:px-6 md:px-8 ">
        {posts.map(({ slug, date, title, subtitle }) => (
          <Link key={slug} href={`/blog/${slug}`} className="block">
            <Card className="shadow-glow shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <CardHeader>
                <CardTitle>{subtitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">{title}</div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">{date}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}