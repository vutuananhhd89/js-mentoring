import React, {useState, useEffect, useReducer} from "react";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import orgChart from '../../org-chart.png';


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

function HomePage() {
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

export default HomePage;