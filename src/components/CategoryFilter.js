import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const catButtons = categories.map(category => (
    <button
      id={category}
      key={category}
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => setSelectedCategory(category)}
    >
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
