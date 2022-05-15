import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/album/:id" component={Album} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes