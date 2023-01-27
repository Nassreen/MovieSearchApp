import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { Results, API_URL, API_KEY } from '../../components/Fetch-API/getFetch'

const MovieDetail: React.FC = () => {

  const { id } = useParams();

  const [movies, setMovies] = useState<Results>();

  useEffect(() => {
    fetch(
      `${API_URL}movie/${
        id ? id : "popular"
      }?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [id]);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            movies ? movies.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                movies ? movies.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {movies ? movies.original_title : ""}
            </div>
            <div className="movie__tagline">{movies ? movies.tagline : ""}</div>
            <div className="movie__rating">
              {movies ? movies.vote_average : ""} <i className="fas fa-star" />
            </div>
            <div className="movie__runtime">
              {movies ? movies.runtime + " mins" : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movies ? movies.overview : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
