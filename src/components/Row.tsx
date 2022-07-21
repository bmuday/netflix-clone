import "./css/Row.css";
import React, { useEffect, useState } from "react";
import axios from "./axios";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow: boolean;
}

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

const Row: React.FC<RowProps> = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
