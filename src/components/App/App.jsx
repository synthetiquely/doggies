import React from 'react';

import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Dogs } from '../Dogs/Dogs';
import { DogsForm } from '../DogsForm/DogsForm';

export const App = () => (
  <Layout>
    <Header><DogsForm /></Header>
    <Content>
      <Dogs />
    </Content>
  </Layout>
);
