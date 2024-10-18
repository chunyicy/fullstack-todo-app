import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./app.css";

const App = () => {
  // getting array list of tasks
  const [tasks, setTasks] = useState([]);

  // uses the useEffect hook and Axios for making HTTP requests
  useEffect(() => {
    fetchTasks();
  }, []);

  // await pauses execution until the promise from axios.get resolves,
  // meaning it waits for the data to be fetched.
  const fetchTasks = async () => {
    // asynchronus function
    const response = await axios.get("http://localhost:8080/tasks");
    setTasks(response.data);
  };

  // sends a POST request to http://localhost:8080/tasks with the task object as the request body
  const addTask = async (task) => {
    await axios.post("http://localhost:8080/tasks", task);
    fetchTasks(); // refresh the task list
  };

  // It sends a PUT request to http://localhost:8080/tasks/${id} where ${id} is the ID of the task to be updated, along with the updatedTask data.
  const updateTask = async (id, updatedTask) => {
    await axios.put(`http://localhost:8080/tasks/${id}`, updatedTask);
    fetchTasks();
  };

  // It sends a DELETE request to http://localhost:8080/tasks/${id} to remove the task with the given ID.
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/tasks/${id}`);
    fetchTasks();
  };

  // It sends a DELETE request to http://localhost:8080/tasks to remove all tasks from the server.
  const deleteAllTasks = async () => {
    await axios.delete("http://localhost:8080/tasks"); // Delete all tasks
    fetchTasks();
  };

  return (
    <div>
      <nav className="nav">
        <h1 className="logo">TODO APP</h1>
        <button className="signout-btn">SIGN OUT</button>
      </nav>
      <div className="container">
        <div className="todo-app">
          <h2>MY TODO LIST</h2>
          <TaskForm addTask={addTask} deleteAllTasks={deleteAllTasks} />
          <TaskList
            tasks={tasks} // display current list of tasks
            updateTask={updateTask} // function to update specific task
            deleteTask={deleteTask} // function to delete specific task
          />
        </div>
      </div>
    </div>
  );
};

export default App;
