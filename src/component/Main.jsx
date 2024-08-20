import React from "react";
import balon from "/img/baloon.png";
import kue from "/img/kue.png";
import kiri from "/img/biru-kiri.png";
import orange from "/img/orange-kanan.png";
export default function Main() {
  return (
    <div className="w-full ">
      <div className="flex justify-center gap-7 items-center">
        <div className="w-[500px]">
          <h1 className="text-2xl sm:text-xl text-blueCustom font-bold">
            Happy Anniversary
          </h1>
          <h2 className="text-5xl sm:text-12 text-orangeCustom mb-10">
            Enigmacamp
          </h2>
          <p className="text-blueCustom">
            Selamat Ulang Tahun, Enigma Camp kami bangga atas pencapaian dan
            dedikasi luar biasa Anda. Semoga tahun ini membawa lebih banyak
            kesuksesan dan peluang baru. Selamat merayakan dan teruslah mencapai
            puncak-puncak baru!
          </p>
        </div>
        <div className="justify-center items-center ">
          <img src={balon} className="w-[300px] self-center"></img>
          <img src={kue} className="w-[500px]"></img>
        </div>
      </div>
    </div>
  );
}
