import React from "react";

function CategoryFilter({ categories }) {
  const catButtons = categories.map(category => (
    <button id={category} key={category}>
      {category}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
