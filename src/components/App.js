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
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm />
      <TaskList
        allTasks={tasks}
        setTasks={setTasks}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
