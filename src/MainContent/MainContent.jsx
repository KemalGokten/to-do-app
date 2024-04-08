import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

import crossMark from "../assets/images/cross.png";
import checkMark from "../assets/images/check.png";
import tasksData from "../assets/jsonFiles/taskList.json";

let tasks = tasksData.map((task) => ({ ...task, id: uuidv4() }));

const MainContent = ({ tasks, setTasks }) => {
  return (
    <div className="main-content">
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
    setTasks((previousList) => 
       previousList.filter((task) => task.id !== id)
    );
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
    <li>
      <Link to={`/tasks/${task.id}`} state={{ task }}>
        {task.task}
      </Link>
      <img
        width={"40px"}
        src={imgSrc}
        alt={task.completed.toString() + "image"}
      />
      <button onClick={() => deleteListItem(task.id)}>Delete</button>
    </li>
  );
});

export default MainContent;
