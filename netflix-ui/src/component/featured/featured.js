import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./featured.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

export default function Featured() {
  const url = "https://image.tmdb.org/t/p/original";
  const [film, setFilm] = useState();
  useEffect(() => {
    axios
      .get(
        `/trending/all/week?api_key=f334aff9f463c2a5053a88cff6a057d8&language=en-US`
      )
      .then((response) => {
        setFilm(response.data.results[0]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${film ? url + film.backdrop_path : ""})`
      }}
      className="featured"
    >
      <div className="featured-container">
        <h1 className="title">{film ? film.title : ""}</h1>
        <div className="featured-button">
          <button className="button1">
            <PlayArrowIcon style={{ color: "black", paddingRight: "10px" }} />{" "}
            Play
          </button>
          <button className="button2">
            <InfoIcon style={{ paddingRight: "10px" }} /> More Info
          </button>
        </div>
        <h1 className="text">{film ? film.overview : ""}</h1>
      </div>
    </div>
  );
}
