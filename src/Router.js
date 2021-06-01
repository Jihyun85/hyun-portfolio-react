import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Work from "./pages/Work";

const Router = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/works/:id" component={Work} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
