import "./Style.css";
import logo from "./images/logo/ProkitsLogo.png";
import Homepage from "./Homepage";
import About from "./About";
import Biling from "./Biling";
import Footer from "./components/Footer";

import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [ipInfo, setIpInfo] = useState({});

  useEffect(() => {
    fetch("https://ipinfo.io/json")
      .then((response) => response.json())
      .then((data) => setIpInfo(data));
  }, []);

  return (
    <div className="App">
      <nav>
        <img src={logo} className="logo" alt="Prokits Logo" />
        <ul className="nav-links">
          <li className="nav-links">
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/about" className="nav-link">
              about
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/biling" className="nav-link">
              biling
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/biling" element={<Biling />} />
      </Routes>
      <Footer ip={ipInfo.ip} />
    </div>
  );
}

export default App;
