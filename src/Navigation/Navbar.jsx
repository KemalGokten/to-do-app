import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="app-name">To Do App</p>
      <Link to={`/tasks`}>
        <img src="" alt="App Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
