import { Link } from "react-router-dom";
import "./MovieCard.css";
import Stars from "../stars/stars";

function MovieCard(movie) {
  return (
    <Link className="movie-link" to={`/details/${movie.id}`}>
      <div className="movie-card" >
      <img width="200" src={movie.poster_path} alt="" />
      <h3 className="movie-title">{movie.title}</h3>
      <Stars vote={movie.vote_average} />
    </div>
    </Link>
  );
}

export default MovieCard;
