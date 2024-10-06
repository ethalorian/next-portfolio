import { Octokit } from "@octokit/rest";

export interface Repo {
  name: string;
  url: string;
  description: string | null;
  stargazers_count: number;
  clone_url: string;
  id: number;
}

export async function fetchLastRepos(username: string, count: number = 4): Promise<Repo[]> {
  const octokit = new Octokit();

  try {
    const response = await octokit.repos.listForUser({
      username,
      sort: 'created',
      direction: 'desc',
      per_page: count,
    });

    return response.data.map(repo => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      stargazers_count: repo.stargazers_count ?? 0,
      clone_url: repo.clone_url!,
      id: repo.id,
    }));
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}