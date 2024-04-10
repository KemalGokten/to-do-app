import { Link } from "react-router-dom";

import appLogo from "../assets/images/app-logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={`/tasks`}>
        <img className="app-logo" src={appLogo} alt="App Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
