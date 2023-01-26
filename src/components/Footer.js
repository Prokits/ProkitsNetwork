import logo from "../images/logo/ProkitsLogo.png";

function Footer(props) {
  return (
    <footer>
      <div>
        <div>
          <img src={logo} alt="Prokits Logo" />
          <p className="bold heading">
            Infrastructure for the connected world.
          </p>
        </div>
        <div className="nav">
          <ul>
            <li className="bold">Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Biling</li>
          </ul>
          <ul>
            <li className="bold">tushgaurav</li>
            <li>Suggestions</li>
            <li>Speedtest</li>
            <li>Usage</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Prokits Digital Services 2023 - All Rights Reserved</p>
        <p>Your IP: {props.ip}</p>
      </div>
    </footer>
  );
}

export default Footer;
