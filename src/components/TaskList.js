import React from "react";
import Task from "./Task";

function TaskList({ allTasks, setTasks, selectedCategory }) {
  const filteredTasks = allTasks.filter(task => {
    if (
      !selectedCategory ||
      selectedCategory === "All" ||
      task.category === selectedCategory
    )
      return true;
    return false;
  });
  const handleDelete = id => {
    setTasks(allTasks.filter(task => id !== task.key));
  };
  const displayTasks = filteredTasks.map(task => (
    <Task task={task} key={task.key} handleDelete={handleDelete} />
  ));
  return <div className="tasks">{displayTasks}</div>;
}

export default TaskList;
