import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskColumn from "./Components/TaskColumn";
import todoIcon from "./assets/todo.png";
import doingIcon from "./assets/doing.png";
import doneIcon from "./assets/checkmark.png";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleComplete = (index) => {
    const taskToComplete = tasks[index];
    taskToComplete.status = "done";
    setTasks([
      ...tasks.slice(0, index),
      taskToComplete,
      ...tasks.slice(index + 1),
    ]);
  };

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <TaskForm setTasks={setTasks} />
      <main className="main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </main>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <MdDarkMode style={{ color: "black" }} />
          ) : (
            <MdLightMode style={{ color: "white" }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default App;
