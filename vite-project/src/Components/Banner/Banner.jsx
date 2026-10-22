import "./banner.css";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        console.error("Error fetching Netflix originals:", error);
      }
    })();
  }, []);
  function truncate(str, n) {
  return str?.length > n ? str.slice(0, n - 1) + "..." : str;
}

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;
