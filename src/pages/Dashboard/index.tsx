import React, { useState, FormEvent } from 'react';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setnewRepo] = useState('gustavolopesv3');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepositorie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputError) {
      setInputError('Digite o autor/nome do reposotrio');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setnewRepo('');
      setInputError('');
    } catch (Err) {
      setInputError('Erro ao realizar busca por esse repositorio');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no gitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepositorie}>
        <input
          value={newRepo}
          type="text"
          onChange={(e) => setnewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
