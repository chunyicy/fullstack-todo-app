import React, { useState } from "react";

const TaskForm = ({ addTask, deleteAllTasks }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      addTask({ description, completed: false });
      setDescription(""); // After adding the task, it resets the description state to an empty string.
    }
  };

  const handleDeleteAll = () => {
    //  triggering the action to clear all tasks
    deleteAllTasks(); // function to clear all tasks
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            className="add-input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // An onChange event handler that updates the state as the user types.
            placeholder="Add a new task"
            required
          />
          <button className="add-btn" type="submit">
            Add Task
          </button>
        </div>
        <div className="delete-all">
          <button className="delete-all-btn" onClick={handleDeleteAll}>
            Clear All Tasks
          </button>
          ;
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
