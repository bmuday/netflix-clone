import "./css/Banner.css";
import axios from "./axios";
import requests from "./Requests";
import { useEffect, useState } from "react";

interface Movie {
  backdrop_path?: string;
  first_air_date?: Date;
  genre_ids?: number[];
  id?: number;
  name?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

const Banner = () => {
  const [movie, setMovie] = useState<Movie>({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    fetchData();
  }, []);

  const truncate = (string?: string, n?: number) => {
    if (string && n)
      return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    return "undefined description";
  };

  if (movie?.backdrop_path) {
    console.log("yes");
  } else {
    console.log("no");
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h2 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h2>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
