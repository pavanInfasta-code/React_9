import React, { useState } from "react";
import "./Result.css";

const Result = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 01 open by default

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="result-section">
      <div className="container">
        <div className="result">
          <h3>
            Fast Launch. Fast results. <br />
            <span className="style">Here's how</span>
          </h3>

          <section className="process">
            {/* 01 */}
            <div className={`process-item ${activeIndex === 0 ? "active" : ""}`}>
              <button
                className="process-header"
                onClick={() => toggleItem(0)}
              >
                <span className="step style">01</span>
                <span className="title">Segment</span>
              </button>
              <div className="process-content">
                <p>
                  One-off announcements or automatically triggered flows.
                  Customers receive their personalized cards within a week.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className={`process-item ${activeIndex === 1 ? "active" : ""}`}>
              <button
                className="process-header"
                onClick={() => toggleItem(1)}
              >
                <span className="step style">02</span>
                <span className="title">Design</span>
              </button>
              <div className="process-content">
                <p>
                  Choose from pre-built templates or design custom cards that
                  perfectly match your brand.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className={`process-item ${activeIndex === 2 ? "active" : ""}`}>
              <button
                className="process-header"
                onClick={() => toggleItem(2)}
              >
                <span className="step style">03</span>
                <span className="title">Send</span>
              </button>
              <div className="process-content">
                <p>
                  We print, pack, and deliver cards directly to your customers’
                  doorstep without any hassle.
                </p>
              </div>
            </div>
            {/* 04 */}
            <div className={`process-item ${activeIndex === 3 ? "active" : ""}`}>
              <button
                className="process-header"
                onClick={() => toggleItem(3)}
              >
                <span className="step style">04</span>
                <span className="title">Convert</span>
              </button>
              <div className="process-content">
                <p>
                     We print, pack, and deliver cards directly to your customers’
                  doorstep without any hassle pack, and deliver cards directly to your customers’
                  doorstep without any hassle.
                </p>
              </div>
            </div>



          </section>
        </div>
      </div>
    </section>
  );
};

export default Result;
