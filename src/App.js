import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts.css";

import Footer from "./components/footer.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Calendar from "./Calendar.jsx";
import Resources from "./Resources.jsx";
import MeetTheTeam from "./meettheteam.jsx";
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: '"Riona Sans Black", monospace',
      }}
    >
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/meettheteam" element={<MeetTheTeam />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
