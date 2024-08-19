import React from "react";
import Header from "./Header";
<<<<<<< HEAD
import FilosofiLogo from "./FilosofiLogo";

export default function Hero() {
  return (
    <div className="bg-red-700">
      <Header />
      <FilosofiLogo />
=======
import backgroundHero from "../../assets/6201484166546178451.jpg";
import Title from "./Title";

export default function Hero() {
  return (
    <div
      className="bg-opacity-10 rounded-lg bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundHero})`,
      }}
    >
      <div className="bg-black bg-opacity-10">
        <Header />
        <Title />
      </div>
>>>>>>> ab68d1fe604daeed278c46237698abfa2459871a
    </div>
  );
}
