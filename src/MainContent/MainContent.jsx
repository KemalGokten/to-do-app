import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from 'react'

import crossMark from "../assets/images/cross.png";
import checkMark from "../assets/images/check.png";
import { Link } from "react-router-dom";

const tasks = [
  { task: "Read the project brief", completed: true },
  { task: "Create a project repository", completed: false },
  { task: "Create React application using Vite", completed: false },
  { task: "Finish Day 1 Development Tasks", completed: false },
  { task: "Finish Day 1 Research Tasks", completed: false },
  { task: "Finish Day 2 Development Tasks", completed: false },
  { task: "Finish Day 2 Research Tasks", completed: false },
];

let count = 0;

const MainContent = () => {

  return (
    <div className="main-content">
    <CreateList />
    </div>
  );
};

const CreateList = () => {
    const [listTasks, setList] = useState(
        tasks.map((task) => {
          return { ...task, id: uuidv4() };
        })
      );
    
      const deleteListItem = React.useCallback((id) => {
        setList((previousList) => previousList.filter((task) => task.id !== id));
      },[]);

    return ( 
        <ul>
        {listTasks.map((currentTask) => (
          <CreateListItem key={currentTask.id} task={currentTask} deleteListItem={deleteListItem} />
        ))}
      </ul>
     );
}
 

const CreateListItem = React.memo(({ task, deleteListItem }) => {
  const imgSrc = task.completed ? checkMark : crossMark;
  return (
    <li>
      <Link to={`/tasks/${task.id}`} state={{task}}>{task.task}</Link>
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
