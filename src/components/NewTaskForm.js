import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const blankTask = {
    category: "Code",
    text: "",
  };
  const [newTask, setNewTask] = useState(blankTask);
  const handleChange = e => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const options = categories.map(category => (
    <option value={category} key={category}>
      {category}
    </option>
  ));
  const onFormSubmit = e => {
    e.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask(blankTask);
  };
  return (
    <form className="new-task-form" onSubmit={onFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={newTask.category}
          onChange={handleChange}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
