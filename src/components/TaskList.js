import React from "react";
import Task from "./Task";

function TaskList({ allTasks }) {
  const displayTasks = allTasks.map(task => (
    <Task task={task} key={task.key} />
  ));
  return <div className="tasks">{displayTasks}</div>;
}

export default TaskList;
