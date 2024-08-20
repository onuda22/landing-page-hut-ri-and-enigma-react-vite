import React from "react";
import img from "/img/pohon.png";
import img1 from "/img/pexels-social.jpg";
import img2 from "/img/pexels-social2.jpg";
import link from "/img/linkedin.png";
import ig from "/img/pngwing.com.png";
export default function Follow() {
  return (
    <div class="w-full bg-slate-900">
      <div class="">
        <div class="mx-auto py-20 pl-16 pr-40 flex justify-between items-center">
          <div class="flex-1 p-6">
            <h1 class="text-8xl font-bold text-gray-800">
              Follow <span class="text-blue-600">Enigma</span>
            </h1>
            <p class="text-2xl text-gray-600 mt-4">
              Bergabunglah dengan Komunitas Kami! Follow kami di media sosial
              untuk menjadi bagian dari komunitas yang terus berkembang dan
              nikmati inspirasi setiap hari.
            </p>
            <div class="mt-5 flex justify-center space-x-4 ">
              <a href="https://id.linkedin.com/company/enigma-camp">
                <img src={link} alt="LinkedIn" class="w-10" />
              </a>
              <a href="https://www.instagram.com/growwithenigma/">
                <img src={ig} alt="Instagram" class="w-10" />
              </a>
            </div>
          </div>

          <div class="flex-1 flex justify-center items-center">
            <img
              src={img}
              alt="Logo"
              class="w-full max-w-xl h-auto rounded-lg"
            />
          </div>
          <div class="flex-1 flex-col items-center space-y-4">
            <img
              src={img1}
              alt="Logo"
              class="w-full max-w-lg h-auto rounded-lg"
            />
            <img
              src={img2}
              alt="Logo"
              class="w-full max-w-lg h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
