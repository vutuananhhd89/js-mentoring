import React from "react";
import {Outlet} from "react-router-dom";

function AboutPage(){
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
};

export default AboutPage;