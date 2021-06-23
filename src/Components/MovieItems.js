import movies from "../movies";
import { MovieWrapper } from "../styles";
import { Link } from "react-router-dom";
const MovieItem = (props) => {
  const movie = props.movie;
  //   const [movie, setMovie] = useState(movies[0]);
  return (
    <div>
      <MovieWrapper>
        {/* <Link to={`/movies/${props.movie.slug}`}> */}
        <img
          alt={movie.title}
          src={movie.poster}
          onClick={() => props.setMovie(movie)}
        />
        {/* </Link> */}
        <p>{movie.title}</p>
        <p>{movie.released}</p>
        <p>{movie.runtime}</p>
      </MovieWrapper>
    </div>
  );
};

export default MovieItem;
