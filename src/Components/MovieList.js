import movies from "../movies";
import MovieItem from "./MovieItems";
import { ListWrapper } from "../styles";
import React, { useState } from "react";
const MovieList = (props) => {
  const MovieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} setMovie={props.setMovie} />
  ));
  return <ListWrapper> {MovieList}</ListWrapper>;
};
export default MovieList;
