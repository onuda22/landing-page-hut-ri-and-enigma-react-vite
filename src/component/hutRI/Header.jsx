import React from "react";

export default function Header() {
  return (
    <header className="w-full top-2 bg-transparent z-1000 p-10">
      <nav className="flex items-center justify-between font-bold ml-4 mr-4">
        <div className="fixed">
          <a href="#" className="text-white text-2xl text-20">
            HUT RI 79
          </a>
        </div>
        <div className="bg-opacity-90 text-center z-100 transition duration-300 flex justify-end w-full">
          {/* <div className="flex align-top"> */}
          <ul className="flex-column flex gap-6">
            <li className="">
              <a href="#" className="text-white">
                BERANDA
              </a>
            </li>
            <li className="">
              <a href="#" className="text-white">
                LATAR BELAKANG
              </a>
            </li>
            <li className="">
              <a href="#" className="text-white">
                FILOSOFI LOGO
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </nav>
    </header>
  );
}
