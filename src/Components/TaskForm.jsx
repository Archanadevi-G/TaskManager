import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    date: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskData.task.trim()) {
      alert("Please Enter a task ");
      return;
    }
    const newTaskData = {
      ...taskData,
      date: formatDate(new Date()),
    };

    setTasks((prev) => {
      return [...prev, newTaskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      date: new Date().toISOString(),
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
      month: "short",
      day: "2-digit",
      weekday: "long",
      year: "numeric",
    });
  };
  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Enter Your Tasks..."
          className="task_input"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              Add Task
            </button>
            <span className="current_date">{formatDate(taskData.date)}</span>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
