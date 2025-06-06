import MovieCard from "../movieCard/MovieCard";
import "./MovieContainer.css";

function MovieContainer({ movies }) {
  return (
    <div className="container">
      {movies.map((item) => (
        <MovieCard
          poster_path={
            "https://image.tmdb.org/t/p/original/" + item.poster_path
          }
          title={item.title}
          vote_average={item.vote_average}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default MovieContainer;
