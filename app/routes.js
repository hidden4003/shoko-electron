/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import SeriesPage from './containers/SeriesPage';
import GroupsPage from './containers/GroupsPage';
import SeriesListPage from './containers/SeriesListPage';

export default () => (
  <App>
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/series" component={SeriesListPage} />
      <Route path="/series/:id" component={SeriesPage} />
      <Route exact path="/groups" component={GroupsPage} />
      <Route exact path="/" component={LoginPage} />
    </Switch>
  </App>
);
