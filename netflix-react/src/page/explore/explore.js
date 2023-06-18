import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./explore.css";

import Search from "@material-ui/icons/Search";
import GiftCard from "@material-ui/icons/CardGiftcard";
import Notification from "@material-ui/icons/Notifications";
import DArrow from "@material-ui/icons/ArrowDropDown";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

import Featured from "../../component/featured/featured";
import Row from "../../component/row/row";

interface Props {
  avatar: string;
  resetInUse: () => void;
}

export default function Explore({ avatar, resetInUse }: Props) {
  function handleResetClick() {
    resetInUse();
  }

  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  const [type, setType] = useState("movie");

  const handleClickMovie = () => {
    setType("movie");
  };

  const handleClickTV = () => {
    setType("tv");
  };

  const generateDiscoverURL = (genre: string) => {
    const apiKey = "f334aff9f463c2a5053a88cff6a057d8";
    const baseUrl = `discover/${type}?api_key=${apiKey}`;

    return `${baseUrl}&with_genres=${genre}`;
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <button>Home</button>
          <button onClick={handleClickTV}>Tv Shows</button>
          <button onClick={handleClickMovie}>Movies</button>
          <button>Latest</button>
          <button>My List</button>
          <button>Browse by Languages</button>
        </div>
        <div className="navbar-right">
          {showSearchBar && (
            <input
              type="text"
              className="search-input"
              placeholder="Search your topic"
            />
          )}
          <span className="icon" onClick={toggleSearchBar}>
            <Search />
          </span>

          <span className="icon">
            <GiftCard />
          </span>
          <span className="icon">
            <Notification />
          </span>

          <span className="avatar-container">
            <img src={avatar} alt="Avatar" className="avtar" />
            <span className="icon">
              <DArrow />
            </span>
            <span className="avatar-dropdown">
              <span className="dropdown-content">
                <button>Account</button>
                <button onClick={handleResetClick}>Switch Profile</button>
                <Link to="/">
                  <button>Sign Out</button>
                </Link>
              </span>
            </span>
          </span>
        </div>
      </div>
      <Featured />

      <Row
        url={
          "discover/tv?api_key=f334aff9f463c2a5053a88cff6a057d8&with_networks=213"
        }
        title="Netflix Originals"
      />
      <Row
        url={generateDiscoverURL("28")}
        title={`Action ${type === "movie" ? "Movies" : "TV Shows"}`}
        isSmall
      />
      <Row
        url={generateDiscoverURL("10402")}
        title={`Music ${type === "movie" ? "Movies" : "TV Shows"}`}
        isSmall
      />
      <Row
        url={generateDiscoverURL("37")}
        title={`Western ${type === "movie" ? "Movies" : "TV Shows"}`}
        isSmall
      />
      <Row
        url={generateDiscoverURL("18")}
        title={`Drama ${type === "movie" ? "Movies" : "TV Shows"}`}
        isSmall
      />
      <Row
        url={generateDiscoverURL("16")}
        title={`Animation ${type === "movie" ? "Movies" : "TV Shows"}`}
        isSmall
      />
      <Row
        url={generateDiscoverURL("9648")}
        title={`Mystery ${type === "movie" ? "Movies" : "TV Shows"}`}
        isSmall
      />
      <Row
        url={generateDiscoverURL("35")}
        title={`Comedy ${type === "movie" ? "Movies" : "TV Shows"}`}
        isSmall
      />
      <div className="footer">
        <span className="icon">
          <FacebookIcon />
        </span>
        <span className="icon">
          <InstagramIcon />
        </span>
        <span className="icon">
          <TwitterIcon />
        </span>
        <span className="icon">
          <YouTubeIcon />
        </span>
        <div className="footer-content">
          <div>
            Audio Description
            <br />
            Investor Relation
            <br />
            Legal Notice
            <br />
          </div>
          <div>
            Help Centre
            <br />
            Jobs
            <br />
            Cookie Preferences
            <br />
          </div>
          <div>
            Gift Cards
            <br />
            Terms of Use
            <br />
            Corporate Information
            <br />
          </div>
          <div>
            Media Centre
            <br />
            Privacy
            <br />
            Contact Us
            <br />
          </div>
        </div>
        <button className="service-code">Service Code</button>
        <br />
        &copy; 1997-2003, Netflix Inc.
      </div>
    </div>
  );
}
