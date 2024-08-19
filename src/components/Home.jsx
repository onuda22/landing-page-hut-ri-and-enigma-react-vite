import React, { useEffect } from "react";
import "../App.css"; // Make sure to create this CSS file and import it here

const Home = () => {
  useEffect(() => {
    // Initialize any JavaScript plugins or custom behavior here
    // For example, if using Rellax.js for parallax:
    // const rellax = new Rellax('.parallax');
  }, []);

  return (
    <div className="home">
      <div
        className="parallax home__parallax home__parallax-img1"
        data-rellax-speed="-9"
      ></div>
      <div
        className="parallax home__parallax home__parallax-img2"
        data-rellax-speed="-7"
      ></div>
      <div
        className="parallax home__parallax home__parallax-img3"
        data-rellax-speed="-6"
      ></div>
      <div
        className="parallax home__parallax home__parallax-img4"
        data-rellax-speed="-3"
      ></div>

      <span className="parallax home__subtitle" data-rellax-speed="-5"></span>

      <div className="home__scroll">
        <a href="#section">
          <i className="bx bx-mouse"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
