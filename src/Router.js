import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Work from "./pages/Work";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/works/:id" component={Work} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
