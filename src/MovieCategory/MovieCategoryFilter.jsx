import React from "react";const CategoryFilter = ({ selectedCategory, handleCategoryChange }) => {
    const categories = [
      { id: "all", name: "All" },
      { id: "28", name: "Action" },
      { id: "12", name: "Adventure" },
      { id: "16", name: "Animation" },
      { id: "35", name: "Comedy" },
      { id: "80", name: "Crime" },
      { id: "99", name: "Documentary" },
      { id: "18", name: "Drama" },
      { id: "10751", name: "Family" },
      { id: "14", name: "Fantasy" },
      { id: "36", name: "History" },
      { id: "27", name: "Horror" },
      { id: "10402", name: "Music" },
      { id: "9648", name: "Mystery" },
      { id: "10749", name: "Romance" },
      { id: "878", name: "Science Fiction" },
      { id: "10770", name: "TV Movie" },
      { id: "53", name: "Thriller" },
      { id: "10752", name: "War" },
      { id: "37", name: "Western" },
    ];  return (
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id, category.name)}
            className={selectedCategory === category.id ? "active" : ""}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  };export default CategoryFilter;