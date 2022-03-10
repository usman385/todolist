import React from "react";

const Button = ({ onAdd, showbtn }) => {
  return (
    <div>
      <button
        className="bg-black ml-20 mt-5 rounded-3xl text-2xl p-3 text-zinc-50"
        onClick={onAdd}
      >
        {showbtn ? "Close" : "Add Task"}
      </button>
    </div>
  );
};

export default Button;
