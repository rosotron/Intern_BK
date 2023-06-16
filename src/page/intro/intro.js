import React, { useRef, useState } from "react";
import "./intro.css";
import faq from "../../data/faq.json";
import { Link } from "react-router-dom";

export default function Intro() {
  const emailInputRef = useRef(null);
  const emailInputRef2 = useRef(null);

  const handleButtonClick = () => {
    emailInputRef.current.focus();
  };
  const handleButtonClick2 = () => {
    emailInputRef2.current.focus();
  };

  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="intro-container">
      <div className="first-part">
        <img className="netflix-logo" src="assets/images/netflixlogo.svg" />

        <Link to="/signin">
          <button className="sign-in">Sign in</button>
        </Link>

        <div className="fp-text">
          <p style={{ fontSize: "48px" }}>
            <b>Unlimited movies, TV shows, and more</b>
          </p>
          <p style={{ fontSize: "24px" }}>Plans now start at USD2.99/month.</p>
          <p style={{ fontSize: "20px" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="email-container">
          <input
            ref={emailInputRef}
            type="text"
            className="email-field"
            placeholder="Enter your number or email"
          />
          &nbsp;&nbsp;
          <button className="get-started-button" onClick={handleButtonClick}>
            Get Started &gt;
          </button>
        </div>
      </div>
      <div className="enjoy-tv">
        <div>
          <b style={{ fontSize: "48px" }}>Enjoy on your tv</b>
          <br />
          <p style={{ fontSize: "30px" }}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <img src="/assets/images/tv1.gif" />
      </div>
      <div className="download-shows">
        <div>
          <b style={{ fontSize: "48px" }}>
            Download your shows to watch offline
          </b>
          <br />
          <p style={{ fontSize: "30px" }}>
            Download your shows to watch offline.
          </p>
        </div>
        <img src="/assets/images/phone1.gif" />
      </div>
      <div className="stream-device">
        <div>
          <b style={{ fontSize: "48px" }}>Watch everywhere</b>
          <br />
          <p style={{ fontSize: "30px" }}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <img src="/assets/images/devices1.jpg" className="devices" />
      </div>
      <div className="kid-profile">
        <div>
          <b style={{ fontSize: "48px" }}>Create profiles for kids</b>
          <br />
          <p style={{ fontSize: "30px" }}>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <img src="/assets/images/kids1.png" />
      </div>
      <div className="faq">
        <b style={{ fontSize: "48px" }}>Frequently Asked Questions</b>
        <div className="faq-content">
          {faq.faqs.map((faq, index) => (
            <div key={index}>
              <div className="question" onClick={() => toggleAnswer(index)}>
                {faq.question}
                <span className={`icon ${expandedId === index ? "open" : ""}`}>
                  +
                </span>
              </div>
              {expandedId === index && (
                <div className="answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <p style={{ fontSize: "20px" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email-container">
          <input
            ref={emailInputRef2}
            type="text"
            className="email-field"
            placeholder="Enter phone number or Email"
          />
          &nbsp;&nbsp;
          <button className="get-started-button" onClick={handleButtonClick2}>
            Get Started &gt;
          </button>
        </div>
      </div>
      <div className="contact">
        <u>
          Questions? Contact us. <br />
          <br />
          <div className="contact-content">
            <div>
              FAQ <br />
              Media Center <br />
              Ways to Watch
              <br />
              Cookie Preferences
              <br />
              Speed Test
              <br />
            </div>
            <div>
              Help Center
              <br />
              Investor Relations
              <br />
              Terms of Use
              <br />
              Corporate Information
              <br />
              Legal Notices
              <br />
            </div>
            <div>
              Account
              <br />
              Jobs
              <br />
              Privacy
              <br />
              Contact Us
              <br />
              Only on Netflix
              <br />
            </div>
          </div>
        </u>
        <br />
        <select className="language">
          <option value="english">English</option>
          <option value="nepali">Nepali</option>
        </select>
        <br />
        Netflix Nepal
      </div>
    </div>
  );
}
