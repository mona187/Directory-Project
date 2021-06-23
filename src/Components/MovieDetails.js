import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { DetailWrapper } from "../styles";
const MovieDetails = (props) => {
  const movie = props.movie;
  //   const movieSlug = useParams().movieSlug;
  //   const movie = props.movies.find((movie) => movie.slug == movie.Slug);
  return (
    <div>
      <DetailWrapper>
        <h1>{movie.title}</h1>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.genre}</p>
        <p>{movie.plot}</p>
        {/* <Link to="/"> */}
        <button>Back</button>
        {/* </Link> */}
      </DetailWrapper>
    </div>
  );
};
export default MovieDetails;
