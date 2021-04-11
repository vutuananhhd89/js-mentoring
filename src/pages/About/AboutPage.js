import React from "react";
import {Switch, Route} from "react-router-dom";
import AboutServicesPage from "./AboutServices/AboutServicesPage";
import AboutHistoryPage from "./AboutHistory/AboutHistoryPage";
import AboutLocationsPage from "./AboutLocations/AboutLocationsPage";

function AboutPage(){
  return (
    <>
      <Switch>
        <Route path="/about/services"> <AboutServicesPage /> </Route>
        <Route path="/about/history"> <AboutHistoryPage /> </Route>
        <Route path="/about/locations"> <AboutLocationsPage /> </Route>
      </Switch>
    </>
  );
};

export default AboutPage;