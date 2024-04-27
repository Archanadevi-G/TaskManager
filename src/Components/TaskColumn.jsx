import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleComplete,
  handleDelete,
}) => {
  return (
    <section className="task_col">
      <h2 className="heading">
        {/* <span className="icon">{icon}</span> */}
        <img src={icon} alt="icon" className="icon" />
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
