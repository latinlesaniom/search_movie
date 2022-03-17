import React from "react";


const MovieCard = ({movie}) => {
    console.log(movie)

    return (
      <>
        <div className="card" key={movie.id}>
          <img
            className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + " poster"}
          />
          <div className="card-content">
            <h3 className="card--tittle">{movie.original_title}</h3>
            <p>
              <small>
                <strong>Overview:</strong> {movie.overview}
              </small>
            </p>
            <p>
              <small>
                <strong>Rating:</strong> {movie.vote_average}
              </small>
            </p>
            <p>
              <small>
                <strong>Released Date:</strong> {movie.release_date}
              </small>
            </p>
          </div>
        </div>
      </>
    );

}
export default MovieCard