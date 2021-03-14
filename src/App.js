import './App.css';

import {Routes, Route} from "react-router-dom";

import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import EventsPage from "./pages/Events/EventsPage";
import Home from "./pages/Home/HomePage";
import Page404 from "./pages/Page404/Page404";
import AboutServicesPage from "./pages/About/AboutServices/AboutServicesPage";
import AboutHistoryPage from "./pages/About/AboutHistory/AboutHistoryPage";
import AboutLocationsPage from "./pages/About/AboutLocations/AboutLocationsPage";

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
