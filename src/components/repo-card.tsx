import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, GitFork, Play } from 'lucide-react';

interface RepoCardProps {
    name: string;
    description: string;
    url: string;
    cloneUrl: string;
    imageSrc: string;
    demoUrl: string;
    priority?: boolean;  // Add this line
  }

const RepoCard: React.FC<RepoCardProps> = ({ name, description, url, cloneUrl, imageSrc, demoUrl, priority = false }) => {
  const handleClone = () => {
    navigator.clipboard.writeText(cloneUrl);
    // You could add a toast notification here to inform the user that the clone URL has been copied
  };

  return (
    <Card className="w-full max-w-md flex flex-col shadow-glow shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="relative w-full pt-[52.356%]">
        <Image
          src={imageSrc}
          alt={`${name} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-md"
          priority={priority}  // Add this line
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Add any additional content here if needed */}
      </CardContent>
      <CardFooter className="justify-between flex-wrap gap-2 mt-auto">
        <Button variant="outline" onClick={handleClone}>
          <GitFork className="mr-2 h-4 w-4" />
          Clone
        </Button>
        <Button variant="outline" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <Play className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RepoCard;