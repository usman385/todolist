import React, { useState } from "react";
import { BiArrowToBottom } from "react-icons/bi";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter Task");
    } else if (day === "") {
      alert("Please enter day");
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <div className="flex flex-col">
      <form className="flex flex-col" onSubmit={onsubmit}>
        <label className="font-semibold font-serif tracking-widest text-justify text-green-900 truncate">
          Add Task
        </label>
        <input
          type="text"
          name="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Task..."
          className="border-2 border-black p-2"
        />
        <label>Add Day</label>
        <input
          type="text"
          name="task"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Enter Day..."
          className="border-2 border-black p-2"
        />
        <div className="flex p-2">
          <input
            type="checkbox"
            name="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            placeholder="Enter Day..."
            className="border-2 border-black p-2 mt-2 pr-3"
          />
          <label className="ml-4 font-bold">Are You Agree</label>
        </div>

        <button className="flex mt-3 justify-center bg-black text-white p-3 mb-6">
          Save <BiArrowToBottom className="mt-1" />
        </button>
      </form>
    </div>
  );
};

export default AddTask;
