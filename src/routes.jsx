import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/projects" component={ Projects }/>
    </Switch>
  )
}
