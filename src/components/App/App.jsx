import React from 'react';

import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { DogsContainer } from '../../containers/DogsContainer/DogsContainer';
import { DogsForm } from '../DogsForm/DogsForm';

export const App = () => (
  <Layout>
    <Header>
      <DogsForm />
    </Header>
    <Content>
      <DogsContainer />
    </Content>
  </Layout>
);
