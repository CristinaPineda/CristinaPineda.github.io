import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PageAbout from "./pages/PageAbout";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/pageabout" component={PageAbout} />
    </Switch>
  );
}
