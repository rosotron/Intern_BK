import "./styles.css";
import React from "react";
import Intro from "./page/intro/intro";
import SignIn from "./page/signin/signin";
import Browse from "./page/browse/browse";
//import Bro from "./page/bro/bro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
}
