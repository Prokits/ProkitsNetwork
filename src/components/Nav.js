import logo from "../images/logo/ProkitsLogo.png";

function Nav() {
  return (
    <nav>
      <img src={logo} className="logo" alt="Prokits Logo" />
      <ul className="nav-links">
        <li className="nav-links">home</li>
        <li className="nav-links">about</li>
        <li className="nav-links">biling</li>
      </ul>
    </nav>
  );
}

export default Nav;
