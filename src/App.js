import './App.css';
import orgChart from './org-chart.png';
import React, {useState, useEffect, useReducer} from "react";
import {Routes, Route} from "react-router-dom";

import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import EventsPage from "./pages/Events/EventsPage";
import Header from "./shared/Header";
import Page404 from "./pages/Page404/Page404";
import AboutServicesPage from "./pages/About/AboutServices/AboutServicesPage";
import AboutHistoryPage from "./pages/About/AboutHistory/AboutHistoryPage";
import AboutLocationsPage from "./pages/About/AboutLocations/AboutLocationsPage";

function Body(props){
  return (
    <section>
      <img src={orgChart} alt="PMI Vietnam Chapter Org Chart" height="200"/>
      <p>Connecting PM community in {props.country}</p>
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

function Footer(props){
  return (
    <footer>
      <p>copyright {props.year}</p>
    </footer>
  );
}

function SecretMessage({login}){
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
  }, [data,login]);

  if(data) {
    return (
      <>
        <h3>Secret Message for Authorized user {data.login}</h3>
        <img src={data.avatar_url} alt={data.login} height="120"/>
      </>
    );
  }

  return (
    <h3>Regular Message</h3>
  ); 
}

function ChapterState(){
  const [chapterState, setChapterState] = useState("Potential");
  
  return (
    <>
      <div>Chapter State is {chapterState}</div>
      <button onClick={() => setChapterState("Newly Formed")}>Newly Formed</button>
      <button onClick={() => setChapterState("Potential")}>Potential</button>
      <button onClick={() => setChapterState("Official")}>Official</button>
    </>
  );
}

function FollowChapter(){
  const [follow, toggle] = useReducer(
    (follow) => !follow,
    false 
  );

  return (
    <>
      <h3>Do you want to follow us?</h3>
      <input 
        type="checkbox" 
        value={follow} 
        onChange={toggle} 
      />
      {follow ? "following" : "not following"}
    </>  
  );
}

function Home() {
  return (
    <>
      <Header country="Vietnam" />
      <Body country="Vietnam" divisions={divisionObjects}/>
      <SecretMessage login="vutuananhhd89"/>
      <ChapterState />
      <FollowChapter />
      <Footer year= {new Date().getFullYear()}/>
    </>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutPage />} >
          <Route path="services" element={<AboutServicesPage />} />
          <Route path="history" element={<AboutHistoryPage />} />
          <Route path="location" element={<AboutLocationsPage />} />
        </Route>
        <Route path="/events" element={<EventsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </div>
  );
}

export default App;
