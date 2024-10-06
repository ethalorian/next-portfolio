'use client';

import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import RepoCard from '@/components/repo-card';
import Header from '@/components/header';
import Footer from '@/components/footer';


interface Repo {
  name: string;
  description: string;
  url: string;
  cloneUrl: string;
  imageSrc: string;
  demoUrl: string;
}

async function getLastPublicRepos(username: string, maxRepos: number = 4): Promise<Repo[]> {
  const octokit = new Octokit();

  const { data: repos } = await octokit.repos.listForUser({
    username,
    sort: 'created',
    direction: 'desc',
    per_page: maxRepos,
  });

  return repos.map(repo => ({
    name: repo.name,
    description: repo.description || '',
    url: repo.html_url,
    cloneUrl: repo.clone_url || '',
    imageSrc: `https://opengraph.githubassets.com/1/${repo.full_name}`,
    demoUrl: repo.homepage || '',
  }));
}

export default function PortfolioPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const fetchedRepos = await getLastPublicRepos('ethalorian');
        setRepos(fetchedRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-primary">My Portfolio</h1>
        {loading ? (
          <p>Loading repositories...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {repos.map((repo, index) => (
              <RepoCard 
                key={repo.name} 
                {...repo} 
                cloneUrl={repo.cloneUrl}
                priority={index < 4}  // Add priority to first 4 cards
              />
            ))}
          </div>
        )}
      </main>
        <Footer/>
    </div>
  );
}