import React from "react";
import "boxicons";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  // allowing users to mark tasks as complete or incomplete and to delete tasks.
  // using React's state management and event handling to provide a dynamic and interactive user experience
  return (
    <ul id="list-container">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <div className="task-content">
            <input
              className="input-checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                updateTask(task.id, { ...task, completed: !task.completed })
              }
            />
            <p>{task.description}</p>
          </div>
          <a className="delete-btn" onClick={() => deleteTask(task.id)}>
            <box-icon color="rgba(0, 0, 0, 0.637)" name="trash"></box-icon>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
