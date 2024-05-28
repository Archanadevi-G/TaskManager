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
  color,
}) => {
  const taskCount = tasks.filter((task) => task.status === status).length;

  return (
    <section className="task_col">
      <h2 className="heading">
        {icon && React.cloneElement(icon, { style: { color } })}
        {title} <p className="count">{taskCount}</p>
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
