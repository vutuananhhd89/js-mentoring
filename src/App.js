import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import EventsPage from "./pages/Events/EventsPage";
import Home from "./pages/Home/HomePage";
import Page404 from "./pages/Page404/Page404";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faCalendarAlt)

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/about"> <AboutPage />  </Route>
          <Route path="/events"> <EventsPage /> </Route>
          <Route path="/contact"> <ContactPage /> </Route>
          <Route path="/"> <Home /> </Route>
          <Route path="*"> <Page404 /> </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

