import './App.css';
import orgChart from './org-chart.png';
import React, {useState, useEffect, useReducer} from "react";
import {Routes, Route, Link, Outlet} from "react-router-dom";
import {About, Events, Contact, Page404, Services, CompanyHistory, Location} from "./pages";

function Header(props){
  return (
    <header>
      <h1> PMI {props.country} Chapter </h1>
    </header>
  );
}

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
    <p>
      <h3>Do you want to follow us?</h3>
      <input 
        type="checkbox" 
        value={follow} 
        onChange={toggle} 
      />
      {follow ? "following" : "not following"}
    </p>  
  );
  
  
}

function Home() {
  return (
    <>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <Header country="Vietnam" />
      <Body country="Vietnam" divisions={divisionObjects}/>
      <Footer year= {new Date().getFullYear()}/>
      <SecretMessage login="vutuananhhd89"/>
      <ChapterState />
      <FollowChapter />
    </>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </div>
  );
}

export default App;
