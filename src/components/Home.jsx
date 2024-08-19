import React, { useEffect } from "react";
import background1 from "../assets/img/6201484166546178451.jpg";
import grafikLayer from "../assets/img/grafik-layer.png";
import logo from "../assets/img/logo79-putih.png";
import { rgba } from "@tamagui/core";

const Home = () => {
  useEffect(() => {
    // Initialize any JavaScript plugins or custom behavior here
    // For example, if using Rellax.js for parallax:
    // const rellax = new Rellax('.parallax');
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <div
        className="w-full h-full absolute bg-no-repeat bg-cover bg-center z-[1]"
        style={{ backgroundImage: `url(${background1})` }}
        data-rellax-speed="-9"
      ></div>
      <div
        className="w-full h-full absolute bg-no-repeat bg-cover bg-center"
        style={{ backgroundColor: rgba(0, 0, 0, 0.4) }}
        data-rellax-speed="-7"
      ></div>
      <div
        className="w-full h-full absolute bg-no-repeat bg-cover bg-center z-100"
        style={{ backgroundImage: `url(${grafikLayer})` }}
        data-rellax-speed="-6"
      ></div>
      <div
        className="w-full h-full absolute bg-no-repeat bg-cover bg-center z-100"
        style={{ backgroundImage: `url(${logo})` }}
        data-rellax-speed="-3"
      ></div>

      <span
        className="absolute w-full flex justify-center text-white mt-[32%] text-8xl z-100"
        data-rellax-speed="-5"
      ></span>

      <div className="absolute w-full flex justify-center text-2xl mb-10 z-1000">
        <a href="#section">
          <i className="border-x text-white "></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
