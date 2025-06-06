import { useCallback, useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { FaCircle } from "react-icons/fa6";
import Stars from "../../components/stars/stars";


function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const getTrailer = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setTrailer(data.results);
  }, [id]);

  useEffect(() => {
    getTrailer();
  }, [getTrailer]);


  
  const getMovieDetails = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setMovieDetails(data);
  }, [id]);

  
  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);
  
  return( <div>
    <Header />
    <div className="backdrop-container">
      <div className="gradient">
        <div className="informations">
          <h1 className="title">{movieDetails.title}</h1>
          <p className="overview">{movieDetails.overview}</p>
          <ul> 
            Gêneros:
            {movieDetails.genres?.map((genre) => (
            <li className="genre"><FaCircle className="bullet"/> {genre.name}</li>
            ))}
          </ul>
          <p className="date">Lançamento: {movieDetails.release_date}</p>
            {movieDetails.vote_average !== undefined && (
              <div className="vote">
                <Stars vote={movieDetails.vote_average} />
                <p>({movieDetails.vote_count})</p>
              </div>
            )}
            <a href={`https://www.youtube.com/watch?v=${trailer[0]?.key}`} target="_blank">
            <button className="trailerButton" value={id}>Assistir trailer</button>
            </a>
        </div>
      </div>
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
        alt="backdrop"
      />
      
    </div>
    </div>);
}


export default MovieDetails;