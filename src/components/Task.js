import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${
        task.reminder
          ? "bg-black text-slate-100 p-3  mb-3 cursor-pointer"
          : "bg-slate-600 text-slate-100 p-3  mb-3 cursor-pointer"
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h1 className="flex justify-between">
        {task.text}{" "}
        <FaTimes
          className="hover:text-amber-500"
          onClick={() => onDelete(task.id)}
        />
      </h1>
      <h1>{task.day}</h1>
    </div>
  );
};

export default Task;
