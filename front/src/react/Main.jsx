import React from "react";
import { Route, Switch } from "react-router";

import PassengersContainer from "./home/PassengersContainer";
import SinglePassengerContainer from "./singlePassenger/singlePassengerContainer";

export default function Main() {
    return (
      <>
        <Switch>
          <Route exact path="/passengers" component={PassengersContainer} />
          <Route exact path="/passengers/:id" component={SinglePassengerContainer} />

        </Switch>
      </>
    );
  }