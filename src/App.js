import "./App.css";
import movies from "./movies";
// components
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
// styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
// Router
import { Route, Switch } from "react-router";
// usestates
import React, { useState } from "react";
//Link
import { Link } from "react-router-dom";
const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  lightpurple: "light purple",
};
function App() {
  // const movie = movie[0];
  const [movie, setMovie] = useState(null);
  const setView = () => {
    if (movie) return <MovieDetails movie={movie} />;
    return <MovieList setMovie={setMovie} />;
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Switch> */}
        {/* <Route path="/movies/movie.id"> */}
        <MovieDetails movie={movies} />
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <Home />
        {/* </Route> */}
        {/* </Switch> */}
        {setView()}
      </ThemeProvider>
    </div>
  );
}

export default App;
