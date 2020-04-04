import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SigIn from '../Pages/SigIn';
import Dashboard from '../Pages/Home';
import News from '../Pages/News';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      {/* <Route path="/register" component={SignUp} /> */}

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/news" component={News} isPrivate />
      {/* 
      <Route path="/profile" component={Profile} isPrivate /> */}
    </Switch>
  );
}
