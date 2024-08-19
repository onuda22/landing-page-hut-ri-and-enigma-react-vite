import React from "react";
import "../App.css";

const Section = () => {
  return (
    <section className="l-section" id="section">
      <div className="section">
        <div className="section__data">
          <h2 className="section__title">Tema Besar</h2>
          <p className="section__text">
            HUT ke-79 RI merupakan sebuah batu loncatan besar bagi Indonesia,
            karena mengalami 3 transisi penting, yaitu menyongsong Ibu Kota
            baru, pergantian pemimpin, serta Indonesia Emas 2045.
          </p>
        </div>
        <img src="src/assets/img/ikn.png" alt="" className="section__img" />
      </div>
    </section>
  );
};

export default Section;
