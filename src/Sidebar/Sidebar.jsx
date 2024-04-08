import { Link } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <Link to={`/tasks`}>Home</Link>
            <Link to={`/tasks/create`}>Create Task</Link>
            <Link to='/about'>About</Link>
        </div>
     );
}
 
export default Sidebar;