import React from 'react';
import RepoCard from './repo-card';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  clone_url: string;
}

interface RepoListProps {
  initialRepos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ initialRepos }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {initialRepos.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          description={repo.description || 'No description available'}
          url={repo.html_url}
          cloneUrl={repo.clone_url}
        />
      ))}
    </div>
  );
};

export default RepoList;