import React from "react";
import Header from "./Header";
import FilosofiLogo from "./FilosofiLogo";
import backgroundHero from "../../assets/6201484166546178451.jpg";
import Title from "./Title";

export default function Hero() {
  return (
    <div
      className="bg-opacity-10 rounded-lg w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundHero})`,
      }}
    >
      <div className="bg-black bg-opacity-30 rounded-lg">
        <Header />
        <Title />
      </div>
    </div>
  );
}
