import { useState } from "react";
import "./App.css";
import Navbar from "./Navigation/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent.jsx";
import DetailedTask from "./components/DetailedTask.jsx";
import CreateTask from "./components/CreateTask.jsx";
import About from "./components/About.jsx";
import { Route, Routes } from "react-router-dom";
import EditTask from "./components/EditTask";
import tasksData from "./assets/jsonFiles/taskList.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    tasksData.map((task) => ({ ...task, id: uuidv4() }))
  );

  return (
    <div className="app">
      <Navbar />

      <div className="content-container">
        <Sidebar />
        <Routes>
          <Route path="/tasks" element={<MainContent tasks={tasks} setTasks={setTasks} />}></Route>
          <Route
            path="/tasks/create"
            element={<CreateTask tasks={tasks} setTasks={setTasks} />}
          ></Route>
          <Route path="/tasks/:taskId" element={<DetailedTask />}></Route>
          <Route
            path="/tasks/:taskId/edit"
            element={<EditTask tasks={tasks} setTasks={setTasks} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<h1>404 Page not found</h1>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
