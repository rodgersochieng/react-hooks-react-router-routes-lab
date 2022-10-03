import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesDisplay = movies.map((movie) => (
    <div key={movie.title}>
      <h3> Name: {movie.title}</h3>
      <p> Time: {movie.time}</p>
      Genres:
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {moviesDisplay}
    </div>
  );
}

export default Movies;
