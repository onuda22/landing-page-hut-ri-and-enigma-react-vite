import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 bg-transparent z-[1000]">
      <nav className="h-16 flex justify-between items-center font-bold max-w-1200 ml-4 mr-4">
        <a href="#" className="text-white">
          HUT RI 79
        </a>
        <div
          className="fixed left-0 top-[-100%] bg-black bg-opacity-90 w-full h-2/5 p-8 text-center z-[100] transition duration-300 md:hidden"
          id="nav-menu"
        >
          <ul className="flex">
            <li className="mb-8">
              <a href="#" className="text-white">
                BERANDA
              </a>
            </li>
            <li className="mb-8">
              <a href="#" className="text-white">
                LATAR BELAKANG
              </a>
            </li>
            <li className="mb-8">
              <a href="#" className="text-white">
                FILOSOFI LOGO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
