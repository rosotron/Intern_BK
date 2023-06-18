import React, { useState } from "react";
import "./browse.css";

import Profiles from "../profiles/profiles";
import Explore from "../explore/explore";

export default function Browse() {
  const [inUse, setinUse] = useState(null);
  function profInUse(prof) {
    setinUse((inUse) => prof);
    console.log("receiving");
  }
  function resetInUse() {
    setinUse(null);
  }
  return (
    <div className="profiles-container">
      <img
        className={inUse === null ? "br-logo" : "ex-logo"}
        src="/assets/images/netflixlogo.svg"
      />
      {inUse === null ? (
        <Profiles profInUse={profInUse} />
      ) : (
        <Explore avatar={inUse.avatar} resetInUse={resetInUse} />
      )}
    </div>
  );
}
