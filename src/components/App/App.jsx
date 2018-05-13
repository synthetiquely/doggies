import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { DogsContainer } from '../../containers/DogsContainer/DogsContainer';
import { Dog } from '../Dog/Dog';
import { DogsForm } from '../DogsForm/DogsForm';

const Anchor = () => (
  <Link href="/" to="/">
    Go back to the gallery
  </Link>
);

export const App = () => (
  <Layout>
    <Header>
      <Switch>
        <Route exact path="/" component={DogsForm} />
        <Route exact path="/dog" component={Anchor} />
      </Switch>
    </Header>
    <Content>
      <Switch>
        <Route exact path="/" component={DogsContainer} />
        <Route exact path="/dog" component={Dog} />
      </Switch>
    </Content>
  </Layout>
);
