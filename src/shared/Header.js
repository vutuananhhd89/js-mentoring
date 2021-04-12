import React from "react";
import './Header.css';


function Header(props){
  return (
    <>
      <h1> PMI {props.country} Chapter </h1>
      <div class="navbar">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
        <div class="dropdown">
          <button class="dropbtn" onClick={myFunction}>
            About
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" id="myDropdown">
              <a href="/about/history">History</a>
              <a href="/about/locations">Locations</a>
              <a href="/about/services">Services</a>
          </div>
        </div>
      </div>
    </>
    
  );
}

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



export default Header;