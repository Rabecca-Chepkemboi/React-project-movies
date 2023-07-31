import React, { useEffect, useState } from "react";
import { MostViewed } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import "./style.css";
import CategoryFilter from "./MovieCategory/MovieCategoryFilter";

const Action = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");  
  useEffect(() => {
    (async () => {
      const movies = await MostViewed();
      setMovies(movies.results);
    })();
  }, []);  const handleCategoryChange = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };  const filteredMovies =
    selectedCategory === "all"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));  return (
    <div>
      {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}     
       <CategoryFilter
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />      <div className="movies">
        {filteredMovies.map((item) => (
          <ImageContainer props={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};export default Action;