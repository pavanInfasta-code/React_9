import React, { useState } from "react";

import './Obvi.css'
import obvi from "../../assets/Obvi/obvi.png";

import r1 from '../../assets/review/2.png'
import r2 from '../../assets/review/r3.png'
import r3 from '../../assets/review/review.png'

const Obvi = () => {


   const [activeIndex, setActiveIndex] = useState(0); // track active logo

  const logos = [r1, r2, r3, r1];
  return (
    <div className="obvi-section">
      <div className="container">
        <div className="obvi">
          <div className="obvi-left  side">
            <img src={obvi} alt="obvi" />
          </div>

          <div className="obvi-right side">


            <div className="obvi-title">

              <h3>How <span className="style">Obvi</span> Drives Profits with Hands-Off Postcard Campaigns</h3>
            </div>

            <div className="obvi2">

              <p>The 🚀 supplements brand wanted to offset high ad costs and reach dormant customers. They scored 1000%+ ROIs.</p>
            

            <div className="values">

              <div className="value">
                <h3>1438%</h3>
                <h6>ROI</h6>
              </div>
              <div className="value">
                <h3>1438%</h3>
                <h6>ROI</h6>
              </div>
              <div className="value">
                <h3>1438%</h3>
                <h6>ROI</h6>
              </div>
            </div>
            
            
            <div className="btn">
            <button>
              READ CASE STUDY
            </button>

            </div>
 <div className="logos">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className={activeIndex === index ? "active" : ""}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obvi;
