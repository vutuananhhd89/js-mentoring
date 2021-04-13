import React from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

function EventPage(){
  return (
    <>
      <Header />
      <h1> Upcoming Events </h1>
      <EventShow 
        title='PMBOK v7 introduction'
        time='Tuesday, 13-Apr-2021' 
        location='https://zoom.us/j/91686969624'
        description='We will share & discuss the updates of PMBOK v7'
      />
      <Footer />
    </>
  );
}

function EventShow(props){
  return(
    <>
      <h1>{props.title}</h1>
      <b>Time: </b>
      <t>{props.time}</t>
      <p>
        <b>Locations: </b>
        <t>{props.location}</t>
      </p>
      <p>{props.description}</p>
    </>
  );
}

export default EventPage;