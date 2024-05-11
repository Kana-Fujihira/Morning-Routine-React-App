import { useState } from "react";
import Footer from "../common_part/Footer";
import "./todolist.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((element, i) => i !== index);
    setTasks(updateTasks);
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={handleInputChange}
            className="toDoAddinput"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default ToDoList;
