import React from "react";
import {Switch, Route} from "react-router-dom";
import AboutServicesPage from "./AboutServices/AboutServicesPage";
import AboutHistoryPage from "./AboutHistory/AboutHistoryPage";
import AboutLocationsPage from "./AboutLocations/AboutLocationsPage";
import orgChart from '../../org-chart.png';
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

function AboutPage(){
  return (
    <>      
      <Switch>
        <Route path="/about" exact>
          <Header />
          <h1>About Us</h1>
          <img src={orgChart} alt="PMI Vietnam Chapter Org Chart" height="200"/>
          <p>Connecting PM community in Vietnam: </p>
          <Divisions divisions={divisionObjects}/>
          <Footer />
        </Route>
        <Route path="/about/services"> <AboutServicesPage /> </Route>
        <Route path="/about/history"> <AboutHistoryPage /> </Route>
        <Route path="/about/locations"> <AboutLocationsPage /> </Route>
      </Switch>
    </>
  );
};

function Divisions(props){
  return (
    <section>
      <ul>
        {props.divisions.map((division) => (
          <li key={division.id}>{division.title}</li>)
        )}
      </ul>
    </section>
  );
}

const divisions = [
  "Membership",
  "Outreach",
  "Tech",
  "Volunteer"
];

const divisionObjects = divisions.map((division, i) => ({id: i, title: division}));

export default AboutPage;