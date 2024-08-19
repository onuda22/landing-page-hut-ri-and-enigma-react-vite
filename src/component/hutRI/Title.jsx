import React from "react";
import grafikLayer from "../../assets/grafik-layer.png";
import logoPutih from "../../assets/logo79-putih.png";
export default function Title() {
  return (
    <div className="flex flex-col rounded-lg items-center justify-center">
      <img src={logoPutih} className="w-[600px] self-center" />
      <img src={grafikLayer} className="w-auto" />
    </div>
  );
}
