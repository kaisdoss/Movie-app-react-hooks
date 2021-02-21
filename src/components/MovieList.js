import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import Filter from "./Filter";
import { moviesList } from "../movies";

function MovieList() {
  const [listMovies, setListMovies] = useState(moviesList);
  // Getting the newMovie from AddMovie Component
  const callback = (newMovie) => {
    setListMovies([...listMovies, newMovie]);
  };
  console.log(listMovies);
  return (
    <div>
      <Filter movieprop={listMovies}  />
      <AddMovie callbackSalah={callback} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {listMovies.map((thisMovie, index) => {
          
          return <MovieCard key={index} movieObj={thisMovie} />;
         
        })}
      </div>
    </div>
  );
}

export default MovieList;
