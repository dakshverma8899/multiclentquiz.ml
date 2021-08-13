import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./UserContant/HomeContainer/Home";
export default function Render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
