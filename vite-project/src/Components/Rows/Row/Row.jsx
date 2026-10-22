import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);

        setMovie(request.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    })();
  }, [fetchUrl]);

  const opts = {
      height: "390",
      width: "100%",
      playerVars: {
          autoplay: 1,
      },
  };
  const handleClick = (movie) => {
    if (trailerurl) {
      setTrailerurl("");
    } else {
      movieTrailer(movie?.name || movie?.title)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerurl(urlParams.get("v"));
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movie?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{padding: '40px'}}>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts}/>}
        
      </div>
    </div>
  );
};

export default Row;
