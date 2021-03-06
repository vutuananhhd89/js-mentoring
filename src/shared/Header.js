import React from "react";
import {Link} from "react-router-dom";

function Header(props){
  return (
    <>
      <h1> PMI {props.country} Chapter </h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </>
  );
}

export default Header;