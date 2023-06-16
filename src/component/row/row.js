import React, { useEffect, useState, useRef } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import "./row.css";

export default function Row(props) {
  const [film, setFilm] = useState([]);
  const [urlId, setUrlId] = useState("");
  const rowRef = useRef(null);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setFilm(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);

  useEffect(() => {
    rowRef.current.scrollTo(0, 0);
  }, [film]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    }
  };

  const handleMovie = (id) => {
    axios
      .get(
        `movie/${id}/videos?api_key=f334aff9f463c2a5053a88cff6a057d8&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          alert("NO Records Found");
        }
      })
      .catch((err) => {
        if (err.response) {
          alert("NO Records Found");
        }
      });
  };

  const scrollRow = (scrollOffset) => {
    rowRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth"
    });
  };

  return (
    <div className="row-container">
      <h1>{props.title}</h1>

      <div className="slider">
        <button
          className="slider-button slider-button-left"
          onClick={() => scrollRow(-200)}
        >
          &lt;
        </button>
        <div className="posters" ref={rowRef}>
          {film.map((obj) => (
            <img
              key={obj.id}
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${
                "https://image.tmdb.org/t/p/original" + obj.backdrop_path
              }`}
              alt="poster"
            />
          ))}
        </div>
        <button
          className="slider-button slider-button-right"
          onClick={() => scrollRow(200)}
        >
          &gt;
        </button>
      </div>

      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}
