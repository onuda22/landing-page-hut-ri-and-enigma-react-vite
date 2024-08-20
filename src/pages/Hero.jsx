import React from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import CardTeam from "../component/CardTeam";
import Meet from "../component/Meet";
import Footer from "../component/Footer";
import { Splash } from "../component/Splash";
// import { CarouselComp } from "../component/CarouselComp";
import Follow from "../component/Follow";

export default function Hero({ onButtonClick }) {
  return (
    <div className="w-full">
      {/* <Splash /> */}
      <Header onButtonClick={onButtonClick} />
      <Main />
      <Follow />
      {/* <CarouselComp /> */}
      <Meet />
      <CardTeam />
      <Footer />
    </div>
  );
}
