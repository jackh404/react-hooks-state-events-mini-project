import React from "react";

function Task({ task, handleDelete }) {
  const { text, category, key } = task;
  // console.log(text);
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(key)}>
        X
      </button>
    </div>
  );
}

export default Task;
