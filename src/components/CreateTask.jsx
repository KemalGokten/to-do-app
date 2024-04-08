import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const [taskText, setTaskText] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task: taskText, completed, id: uuidv4() };
    setTasks([...tasks, newTask]); // Add the new task to the existing tasks array
    navigate("/tasks"); // Navigate back to the tasks page
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Task</h1>
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
        is Task Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateTask;
