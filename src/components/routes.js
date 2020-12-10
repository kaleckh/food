import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Map from "./Map";
import Login from "./Login";
import Donation from "./Dontation";

export default (
  <BrowserRouter>
    <Switch>
      <Route component={Map} exact path="/map" />
      <Route component={Login} path="/login" />
      <Route component={Donation} path="/donate/:id" />
    </Switch>
  </BrowserRouter>
);
