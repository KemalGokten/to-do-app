import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import crossMark from "../assets/images/cross.png";
import checkMark from "../assets/images/check.png";

const MainContent = ({ tasks, setTasks }) => {
  return (
    <div className="main-content">
      <h1>TASKS</h1>
      <CreateList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

const CreateList = ({ tasks, setTasks }) => {
  const location = useLocation();

  if (location.state) {
    const { taskText, completed } = location.state;
    tasks.push({ task: taskText, completed: completed });
  }

  const deleteListItem = React.useCallback((id) => {
    setTasks((previousList) => previousList.filter((task) => task.id !== id));
  }, []);

  return (
    <ul>
      {tasks.map((currentTask) => (
        <CreateListItem
          key={currentTask.id}
          task={currentTask}
          deleteListItem={deleteListItem}
        />
      ))}
    </ul>
  );
};

const CreateListItem = React.memo(({ task, deleteListItem }) => {
  const imgSrc = task.completed ? checkMark : crossMark;
  return (
    <li className="list-item">
      <Link to={`/tasks/${task.id}`} state={{ task }}>
        {task.task}
      </Link>
      <div className="item-description">
        <img
          width={"40px"}
          src={imgSrc}
          alt={task.completed.toString() + "image"}
        />
        <button className="cssbuttons-io" onClick={() => deleteListItem(task.id)}>
          <span>Delete</span>
        </button>
      </div>
    </li>
  );
});

export default MainContent;
