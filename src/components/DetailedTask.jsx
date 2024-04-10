import { Link, useLocation } from "react-router-dom";

const DetailedTask = () => {
  const location = useLocation();
  const task = location.state.task;

  return (
    <div className="detailed-task-container">
      <p className="task-id">Task ID: {task.id}</p>
      <p className="task-description">Task: {task.task}</p>
      <p className="task-status">Task Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
      <Link to={`/tasks/${task.id}/edit`} state={{ task }}>
        <button className="edit-button">Edit Task</button>
      </Link>
    </div>
  );
};

export default DetailedTask;
