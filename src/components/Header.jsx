import "../App.css";
import React from "react";

const Header = () => {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <a href="#" className="nav__logo">
          HUT RI 79
        </a>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu-alt-right"></i>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                BERANDA
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                LATAR BELAKANG
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
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
