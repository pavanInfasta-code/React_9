import React, { useState } from "react";

import review from "../../assets/review/review.png";
import "./Review.css";

import r2 from "../../assets/review/2.png";
import r3 from "../../assets/review/r3.png";
import Popup from "./Popup";
const Review = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="review-section">
      <div className="container">
        <div className="review">
          <h3>
            PostPilot makes it a <span className="style">cinch</span> to send
            personalized, profit-generating postcards.
          </h3>

          <div className="r-card">
            <h4>
              <span className="style">Powerful</span> <br />
              acquisition & retention
            </h4>
            <p>
              Send one-ff or triggered campaigns to customers & prospects.
              Target email ledds with MailMatch".
            </p>

            <div className="r-bottom">
              <img src="" alt="" />

              <p>
                It's like Kalviyo for direct mail.The results are absolutely
                insane.
              </p>

              <div className="r-foot">
                <p>Ash Melwani ,CMO</p>
                <img src={review} alt="" />
              </div>
            </div>
          </div>

          <div className="r-cards">
            {/* 2nd card */}
            <div className="r-card right-card">
              <h4>
                <span className="style">Fight back </span> 
                against iOS updates, jacked-up CPCs & spam folders
              </h4>
              <p>
                Deliver your message to all of your customers — for less than
                the cost of a click.
              </p>

              <div className="r-bottom">
                <img src="" alt="" />

                <p>
                  PostPilot is our new weapon against sinking email engagement
                  and rising PPC costs. The results and ROI have been
                  outstanding. It’s now one of our core marketing channels to
                  increase acquisition & LTV.
                </p>

                <div className="r-foot">
                  <p>Leah Keith ,GM</p>
                  <img src={r2} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="r-card r-last">
            <h4>
              Done for
              <span className="style">you</span> <br />
            </h4>
            <p>
              From design & strategy to stamp-licking, our ecom experts help you
              every step of the way.
            </p>

            <div className="r-bottom">
              <img src="" alt="" />

              <p>
                The team is so knowledgeable and beyond helpful. I’m blown away
                by their communication, detail, and attentiveness and always
                feel like they have our best interest in mind. Definitely worth
                a try.
              </p>

              <div className="r-foot">
                <p>Holly Dabies ,Marketing ,CMO</p>
                <img src={r3} alt="" />
              </div>
            </div>
          </div>

          <div className="review-button">
            <button onClick={() => setOpen(true)}>Open Popup</button>
          </div>
          {open && <Popup onClose={() => setOpen(false)} />}
        
        
        </div>

      </div>
    </section>
  );
};

export default Review;
