import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

function AboutPage(){
  return (
    <>
      <Header />
      <h1>[About]</h1>
      <Outlet />
      <Footer year="2021"/>
    </>
  );
};

export default AboutPage;