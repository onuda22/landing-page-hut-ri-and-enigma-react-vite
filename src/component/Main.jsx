import React from "react";
import balon from "../assets/baloon.png";
import kue from "../assets/kue.png";
import kiri from "../assets/biru-kiri.png";
import orange from "../assets/orange-kanan.png";
export default function Main() {
  return (
    <div className="w-full ">
      <div className="flex justify-center gap-7 items-center">
        <div className="w-[500px]">
          <h1 className="text-2xl text-blueCustom font-bold">
            Happy Anniversary
          </h1>
          <h2 className="text-7xl text-orangeCustom mb-10">Enigmacamp</h2>
          <p className="text-blueCustom">Selamat Ulang Tahun, Enigma Camp kami bangga 
            atas pencapaian dan dedikasi luar biasa Anda.
            Semoga tahun ini membawa lebih banyak kesuksesan dan peluang baru. Selamat merayakan dan
             teruslah mencapai puncak-puncak baru!</p>
        </div>
        <div className="justify-center items-center ">
          <img src={balon} className="w-[300px] self-center"></img>
          <img src={kue} className="w-[500px]"></img>
        </div>
      </div>
      <div className="flex flex-wrap justify-between ">
      <img src={kiri} className="w-[500px] self-center  sm:w-[150px]"></img>
      <img src={orange} className="w-[300px]  sm:w-[150px]"></img>
      </div>
      <div className="bg-"></div>
    </div>
  );
}
