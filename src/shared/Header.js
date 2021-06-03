import React from "react";
import './Header.css';
import { useHistory, useLocation } from "react-router-dom";
import { useRef } from 'react';




function Header(){
  let history = useHistory();
  const toggleRef = useRef();
  const location = useLocation();
  console.log(location.pathname);
  const currentUrl = location.pathname;


  function redirectAbout(){
    history.push("/about");
    console.log('history push /about');
  }

  function showToggle(){
    toggleRef.current.classList.toggle("show");

  }
  
  return (
    <>
      <h1> PMI Vietnam Chapter </h1>
      <div class="navbar">
        <a className={ currentUrl === "/" ? "highlight" : ""} href="/">Home</a>
        <a className={ currentUrl === "/events" ? "highlight" : ""} href="/events">Events</a>
        <a className={ currentUrl === "/contact" ? "highlight" : ""} href="/contact">Contact</a>
        <div class="dropdown">
          <button class="dropbtn" onClick={redirectAbout} onMouseOver={showToggle}>
            About
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" ref={toggleRef}>
              <a href="/about/history">History</a>
              <a href="/about/locations">Locations</a>
              <a href="/about/services">Services</a>
          </div>
        </div>
      </div>
    </>
    
  );
}

// function redirectAbout(){
//   window.location.assign('/about');
//   console.log("hi");
// }

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Close the dropdown menu if the user clicks outside of it


export default Header;