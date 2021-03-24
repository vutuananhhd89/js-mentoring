import React from "react";
import {Outlet} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import AboutServicesPage from "./AboutServices/AboutServicesPage";
import AboutHistoryPage from "./AboutHistory/AboutHistoryPage";
import AboutLocationsPage from "./AboutLocations/AboutLocationsPage";

function AboutPage(){
  return (
    <>
      <Header />
      <h1>[About]</h1>
      <Route path="/about/services/" element={<AboutServicesPage />} exact/>
      <Route path="/about/history/" element={<AboutHistoryPage />} exact/>
      <Route path="/about/location/" element={<AboutLocationsPage />} exact/>
      <Footer year="2021"/>
    </>
  );
};

export default AboutPage;