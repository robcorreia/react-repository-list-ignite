import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface IRepository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const url = 'https://api.github.com/orgs/rocketseat/repos';

  useEffect(() => {
    fetch(url).then((response) =>
      response.json().then((data) => setRepositories(data)),
    );
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
