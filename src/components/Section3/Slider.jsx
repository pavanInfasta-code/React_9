import React from "react";
import "./Slider.css";

import i1 from "../../assets/Slider/i1.png";
import i2 from "../../assets/Slider/i2.png";
import i3 from "../../assets/Slider/i3.jpg";
import i4 from "../../assets/Slider/i4.jpeg";
import i5 from "../../assets/Slider/i5.jpg";

const brands = [i1, i2, i3, i4, i1, i2,i5];

const Slider = () => {
  return (
    <section className="slider-section">
      <div className="container">
        
        <h2 className="slider-heading">
      Trusted by thousands <br />
      of top DTC <span className="style">brands.</span>
    </h2>


        <div className="slider">
          <div className="slide-track">
            {brands.concat(brands).map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo} alt="brand logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
