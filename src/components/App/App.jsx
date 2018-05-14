import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'loadable-components';
import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { DogsForm } from '../DogsForm/DogsForm';
import { GoBack } from '../GoBack/GoBack';
import { Error } from '../Error/Error';
import { Spinner } from '../Spinner/Spinner';

const OverlayedSpinner = () => <Spinner overlayed />;

export const DogsGalleryPage = loadable(
  () => import('../../containers/DogsContainer/DogsContainer'),
  {
    LoadingComponent: OverlayedSpinner,
    ErrorComponent: Error,
  },
);
export const DogIndividualPage = loadable(() => import('../Dog/Dog'), {
  LoadingComponent: OverlayedSpinner,
  ErrorComponent: Error,
});

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
        <Route exact path="/" component={DogsGalleryPage} />
        <Route exact path="/dog" component={DogIndividualPage} />
      </Switch>
    </Content>
    <Error />
  </Layout>
);
