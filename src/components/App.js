import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

const allTasks = TASKS.map(task => ({ ...task, key: uuidv4() }));
function App() {
  const [tasks, setTasks] = useState(allTasks);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList allTasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
