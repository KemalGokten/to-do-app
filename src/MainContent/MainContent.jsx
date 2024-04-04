import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import crossMark from "../assets/images/cross.png";
import checkMark from "../assets/images/check.png";
import tasksData from "../assets/jsonFiles/taskList.json";

let tasks = tasksData.map((task) => ({ ...task, id: uuidv4() }));

const MainContent = () => {
  return (
    <div className="main-content">
      <CreateList />
    </div>
  );
};

const CreateList = () => {
  const [listTasks, setList] = useState(tasks);

  const deleteListItem = React.useCallback((id) => {
    setList((previousList) => {
      return tasks = previousList.filter((task) => task.id !== id);
    });
  }, []);

  return (
    <ul>
      {listTasks.map((currentTask) => (
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
