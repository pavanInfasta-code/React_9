import React from "react";
import "./Cards.css";

import c1 from "../../assets/Cards/c1.png";
import c2 from '../../assets/Cards/c2.png'
import c3 from '../../assets/Cards/c3.png'
import c4 from '../../assets/Cards/c4.png'
import c5 from '../../assets/Cards/c5.png'
import c6 from '../../assets/Cards/c6.png'
const Cards = () => {
  return (
    <section className="cards-section">
      <div className="container">
        <div className="brand">
          <h3>
            Everything your brand needs to <br />
            <span className="style">make your brand unforgettable</span>
          </h3>

          <div className="cards">

{/* c1 */}

            <div className="card  c1">
              <img src={c1} alt="" />

              <h4>Plug-and-play with your stack</h4>

              <p>
                Native integrations provide seamless segmentation,automation &
                tracking.No clunk spreadsheets.
              </p>
            </div>

            {/* c2 */}
            <div className="card  c2">
              <img src={c2} alt="" />

              <h4>Run campaigns on autopilot</h4>

              <p>
               Ink profits while you sleep: Just set it and forget it.
              </p>
            </div>


            {/* c3 */}
            <div className="card  c3">
              <img src={c3} alt="" />

              <h4>Real-time ROI dashboard</h4>

              <p>
                Track performance of every postcard by customer or discount code. Your CFO will love it.
              </p>
            </div>

            {/* c4 */}
            <div className="card  c4">
              <img src={c4} alt="" />

              <h4>Deliver WOW with *real* handwritten cardsPlug-and-play with your stack</h4>

              <p>
                Our proprietary robots use real pens and ink for an unforgettable VIP touch.
              </p>
            </div>

            {/* c5 */}
            <div className="card  c5">
              <img src={c5} alt="" />

              <h4>Predictable pricing</h4>

              <p>
               Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.
              </p>
            </div>

            {/* c6 */}
            <div className="card  c6">
              <img src={c6} alt="" />

              <h4>Complimentary concierge service</h4>

              <p>
               DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.
              </p>
            </div>

          





          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
