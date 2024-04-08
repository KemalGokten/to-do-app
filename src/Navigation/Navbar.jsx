import { Link } from "react-router-dom";

import appLogo from "../assets/images/app-logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="app-name">To Do App</p>
      <Link to={`/tasks`}>
        <img className="app-logo" src={appLogo} alt="App Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
