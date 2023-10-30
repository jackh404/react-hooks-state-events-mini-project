import React from "react";
import Task from "./Task";

function TaskList({ allTasks, setTasks }) {
  const handleDelete = id => {
    setTasks(allTasks.filter(task => id !== task.key));
  };
  const displayTasks = allTasks.map(task => (
    <Task task={task} key={task.key} handleDelete={handleDelete} />
  ));
  return <div className="tasks">{displayTasks}</div>;
}

export default TaskList;
