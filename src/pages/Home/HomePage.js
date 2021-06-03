import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from "react";

function EventItem(props){
  return (
    <p className= "event-item">
      <span class="circle">{props.date}</span>
      <body class="event-body">
        <li className="event-title">{props.title} </li>
        <li>
          <span class="fa-li"><i class="fas fa-calendar-alt"></i></span>{props.time} 
        </li>
        <li><span class="fa-li"><i class="fas fa-link"></i></span>{props.location} </li>
        <li><span class="fa-li"><i class="fas fa-angle-right"></i></span>{props.summary} </li>
        <br></br>
      </body>
    </p>
  );
}

function EventList(props) {
  const events = props.events;
  const eventItems = events.map((event) => 
    <EventItem key={event.id} id={event.id} title={event.title} time={event.time} date={event.date} location={event.location} summary={event.summary} />
  );
  return (
    <ul class="fa-ul">{eventItems}</ul>
  );
}

const events = [
  {id: 1, title: 'PMBOK v7', time: '7:30 PM Apr 22 2021', date:'Apr 22 2021',location: 'zoom.us/abcd', summary: 'you will love it'},
  {id: 2, title: 'Agile Transformation', time: '7:30 PM Apr 29 2021', date:'Apr 29 2021', location: 'zoom.us/xyz', summary: 'you will love it a lot'}
];

function HomePage() {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <EventList events={events} />
      <Footer/>
    </>
  );
}

export default HomePage;