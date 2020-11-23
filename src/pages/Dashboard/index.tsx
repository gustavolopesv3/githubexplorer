import React from 'react';
import { Title, Form, Repositories } from './styles';
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
      <Repositories></Repositories>
    </>
  );
};

export default Dashboard;
