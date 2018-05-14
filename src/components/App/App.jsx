import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { DogsContainer } from '../../containers/DogsContainer/DogsContainer';
import { Dog } from '../Dog/Dog';
import { DogsForm } from '../DogsForm/DogsForm';
import { GoBack } from '../GoBack/GoBack';
import { Error } from '../Error/Error';

export const App = () => (
  <Layout>
    <Header>
      <Switch>
        <Route exact path="/" component={DogsForm} />
        <Route exact path="/dog" component={GoBack} />
      </Switch>
    </Header>
    <Content>
      <Switch>
        <Route exact path="/" component={DogsContainer} />
        <Route exact path="/dog" component={Dog} />
      </Switch>
    </Content>
    <Error />
  </Layout>
);
