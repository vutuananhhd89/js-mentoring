import './App.css';
import orgChart from './org-chart.png';
import React, {useState} from "react";

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

function SecretMessage(){
  return (
    <h3>Secret Message for Authorized user</h3>
  );
}

function RegularMessage(){
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

function App(props) {
  return (
    <>
      <Header country="Vietnam" />
      <Body country="Vietnam" divisions={divisionObjects}/>
      <Footer year= {new Date().getFullYear()}/>
      {props.Authorized ? <SecretMessage /> : <RegularMessage />}
      <ChapterState />
    </>
  );
}

export default App;
