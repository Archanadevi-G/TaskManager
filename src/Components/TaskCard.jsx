import React from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";
import { FaRegThumbsUp } from "react-icons/fa";

const TaskCard = ({ title, handleComplete, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_done" onClick={() => handleComplete(index)}>
          <FaRegThumbsUp className="complete_icon" />
        </div>

        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="icon" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
