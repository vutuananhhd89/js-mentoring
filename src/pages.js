import React from "react";
import {Outlet} from "react-router-dom";

export function Home(){
  return (
    <div>
      <h1>[Homepage]</h1>
    </div>
  );
}

export function About(){
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Services(){
  return (
    <div>
      <h1>Our Services</h1>
    </div>
  );
}

export function CompanyHistory(){
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Location(){
  return (
    <div>
      <h1>Our Location</h1>
    </div>
  );
}

export function Events(){
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact(){
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Page404(){
  return (
    <div>
      <h1>This Page does not exist</h1>
    </div>
  );
}