import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Results, getFetch } from "../../components/Fetch-API/getFetch";
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import Card from "../../components/Card/Card";

const Home: React.FC = () => {

  const [movies, setMovies] = useState<Results[]>([]);
  const [movieSearch, setMovieSearch] = useState<Results[]>();


  useEffect(() => {
    getFetch(setMovies);
  }, []);

  const searchHandler = useCallback((item: () => any) => {
    setMovieSearch(item)
}, [])

  return (
    <>
      <div className="poster">
      <SearchMovie searchMovieHandler={searchHandler} />
                {
                    !movieSearch ? (
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies &&
            movies.map((movie) => (
              <Link
                key={movie.id}
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              >
                <div className="poster-image">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                  />
                </div>
                <div className="poster-image-over">
                  <div className="poster-title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="poster-runtime">
                    {movie ? movie.release_data : ""}
                    <span className="poster-rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="poster-description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            ))}
        </Carousel>
                            ) : (<div className='movie-list'>
                            <h2 className='list-title'>Search Movies</h2>
                            <div className='list-cards'>
                                {
                                    movieSearch.map(movie => (
                                        <Card key={movie.id * Math.random()} movie={movie} />
                                    ))
                                }
                            </div>
                        </div>)}
      </div>
    </>
  );
};

export default Home;
