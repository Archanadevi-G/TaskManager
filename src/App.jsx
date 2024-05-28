import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskColumn from "./Components/TaskColumn";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

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
          title="Open"
          icon={<GoDotFill />}
          tasks={tasks}
          status="todo"
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          color="red"
        />
        <TaskColumn
          title="In Progress"
          icon={<GoDotFill />}
          tasks={tasks}
          status="doing"
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          color="blue"
        />
        <TaskColumn
          title="Closed"
          icon={<GoDotFill />}
          tasks={tasks}
          status="done"
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          color="green"
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
