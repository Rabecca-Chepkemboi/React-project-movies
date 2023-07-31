import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getCategories } from "../../../utils/utilities";
import ImageContainer from "../../../atoms/Image-container";
import "./style.css";const MovieLists = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getCategories();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);  if (loading) {
    return <h1>Loading movies...</h1>;
  }  const limit = 4;
  const limitedMovies = movies.slice(0, limit);  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,  };  return (
    <div className="movies-slider">
      <Carousel {...sliderSettings}>
        {limitedMovies.map((item) => (
          <div key={item.id} className="movie-slide">
            <ImageContainer props={item} useBackgroundImage={true} />          </div>
        ))}
      </Carousel>
    </div>
  );
};export default MovieLists;