import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">
        <li>
          <Link to={`/tasks`} >
            HOME
          </Link>
        </li>
        <li>
          <Link to={`/tasks/create`} >
            CREATE TASK
          </Link>
        </li>
        <li>
          <Link to="/about" >
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
