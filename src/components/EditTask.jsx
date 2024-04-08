import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditTask = ({ tasks, setTasks }) => {
  const location = useLocation();

  if (!location.state) {
    throw Error("There is no task to edit, state got empty");
  }

  const task = location.state.task;

  const [taskText, setTaskText] = useState(task.task);
  const [completed, setCompleted] = useState(task.completed);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, task: taskText, completed } : t
    );
    setTasks(updatedTasks);
    navigate(`/tasks/${task.id}`, {
      state: { task: { task: taskText, completed, id: task.id } },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit the Task</h1>
      <label>
        Task description:
        <input
          type="text"
          value={taskText}
          placeholder="You need to fill a task here"
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
      </label>
      <label>
        is task Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTask;
