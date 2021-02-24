import './App.css';

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
      <p>Connecting PM community in {props.country}</p>
      <ul>
        {props.divisions.map((division) => (<li>{division}</li>))}
      </ul>
    </section>
  );
}

const divisions = [
  "Membership",
  "Outreach",
  "Tech"
];



function Footer(props){
  return (
    <footer>
      <p>copyright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header country="Indonesia" />
      <Body country="Indonesia" divisions={divisions}/>
      <Footer year= {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
