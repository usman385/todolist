import axios from "axios";
import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Button from "./Button";
import Tasks from "./Tasks";

const Header = (props) => {
  const [showForm, setShowForm] = useState(true);
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //---------------Fetch data from api----------------
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tasks");
      const response = res.data;
      settasks(response);
      console.log("get data----", response);
    } catch (error) {
      console.log("get data error", error);
    }
  };

  //---------------delete data from api-----------------

  const deleteTask = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/tasks/${id}`);
      settasks(tasks.filter((item) => item.id !== id));
      console.log("deleted data----", res);
    } catch (err) {
      console.log("error to delete--", err);
    }
  };

  //---------------Add Task------------------------------
  const addTask = async (task) => {
    try {
      const res = await axios.post(`http://localhost:3000/tasks `, task);
      const data = res.data;
      settasks([data, ...tasks]);
      console.log("post data", data);
      // const id = Math.floor(Math.random() * 10000 + 1);
      // const newtask = { id, ...task };
      // settasks([newtask, ...tasks]);
    } catch (err) {
      console.log("add task error", err);
    }
  };

  //---------------updateDATA-----------------------

  const toggle = async (id) => {
    const toggle = fetchData(id);
    const updateTask = { ...toggle, reminder: !toggle.reminder };
    const res = await axios.put(
      `http://localhost:3000/tasks/${id}`,
      updateTask
    );
    const response = res.data;
    console.log("update data", response);
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !response.reminder } : task
      )
    );
  };

  return (
    <div className="flex flex-col">
      <header className="flex justify-center border-2 p-3 mt-3 ">
        <h1 className=" font-extrabold text-5xl mt-5 ">{props.title}</h1>
        <Button onAdd={() => setShowForm(!showForm)} showbtn={showForm} />
      </header>
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggle} />
      ) : (
        "No Tasks Are Availabe"
      )}
    </div>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
