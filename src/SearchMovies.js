import React, { useState } from "react";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
  const [key, setKeyboard] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=9793b4e1932d008d66e6126dfcb61cd0&language=en-US&query=${key}&page=1&include_adult=false`;
    const data = await fetch(url);
    const res = await data.json();
    setMovies(res.results);
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i. e. Jurassic Park"
          onChange={(e) => setKeyboard(e.target.value)}
        />
        <button className="button" type="Submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
            />
          ))}
      </div>
    </>
  );
};

export default SearchMovie;
