import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom

const DetailedTask = () => {
  const location = useLocation();
  const task = location.state.task;
  return (
    <div>
      <p>Task id: {task.id}</p>
      <p>Task: {task.task}</p>
      <p>Task status: {task.completed.toString()}</p>
      <Link to={`/tasks/${task.id}/edit`} state={{ task }}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default DetailedTask;
