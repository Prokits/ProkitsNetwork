import logo from "../images/logo/ProkitsLogo.png";
import Homepage from "../Homepage";
import About from "../About";
import Biling from "../Biling";

import { Routes, Route, Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className="main-footer">
        <div className="branding">
          <img src={logo} alt="Prokits Logo" />
          <p className="bold heading">
            Infrastructure for the connected world.
          </p>
        </div>
        <div className="nav">
          <ul>
            <li className="bold">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/biling" className="nav-link">
                Biling
              </Link>
            </li>
          </ul>
          <ul>
            <li className="bold">
              <a href="https://beta.tushgaurav.in" className="nav-link">
                tushgaurav
              </a>
            </li>
            <li>Suggestions</li>
            <li>
              <a href="https://www.speedtest.net" className="nav-link">
                Speedtest
              </a>
            </li>
            <li>Usage</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Prokits Digital Services 2023 - All Rights Reserved</p>
        <p>Your IP: {props.ip}</p>
      </div>

      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/biling" element={<Biling />} />
      </Routes> */}
    </footer>
  );
}

export default Footer;
