import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no gitHub</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38574162?s=460&u=214063de7a21a67c111c02296c8e4eb9ab251584&v=4"
            alt="Gustavo lopes"
          />
          <div>
            <strong>gustavolopesv3/myprofile</strong>
            <p>my professional profile and portfolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38574162?s=460&u=214063de7a21a67c111c02296c8e4eb9ab251584&v=4"
            alt="Gustavo lopes"
          />
          <div>
            <strong>gustavolopesv3/myprofile</strong>
            <p>my professional profile and portfolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38574162?s=460&u=214063de7a21a67c111c02296c8e4eb9ab251584&v=4"
            alt="Gustavo lopes"
          />
          <div>
            <strong>gustavolopesv3/myprofile</strong>
            <p>my professional profile and portfolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
