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
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form__title">Add a Task</h1>
        <label className="form__label">
          Task description:
          <input
            type="text"
            value={taskText}
            placeholder="You need to fill a task here"
            onChange={(e) => setTaskText(e.target.value)}
            required
            className="form__input"
          />
        </label>
        <label className="form__label">
          is Task Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="form__checkbox"
          />
        </label>
        <button type="submit" className="form__button">Submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
