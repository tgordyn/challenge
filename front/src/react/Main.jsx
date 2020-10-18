import React from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";

import PassengersContainer from "./home/PassengersContainer";
import SinglePassengerContainer from "./singlePassenger/singlePassengerContainer";
import ingresarPasajeroContainer from "./ingresarPasajero/ingresarPasajeroContainer";

export default function Main() {
    return (
      <>
        <Switch>
          <Route exact path="/passengers" component={PassengersContainer} />
          <Route exact path="/passengers/:id" component={SinglePassengerContainer} />
          <Route exact path="/addpassenger" component={ingresarPasajeroContainer} />
          <Redirect from= "/" to= "/passengers" />
        </Switch>
      </>
    );
  }