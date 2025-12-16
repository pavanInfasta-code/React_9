import React from "react";
import "./Post.css";

import p1 from "../../assets/Post/p1.png";

const posts = [
  {
    name: "Nathan Woods",
    handle: "@HeisNathan",
    text: "We have done some rad winbacks to 360-720 days since purchase that have rocked. PostPilot team is one of my favs."
  },
  {
    name: "Alex Carter",
    handle: "@alexdtc",
    text: "PostPilot helped us increase retention massively. The experience feels premium and customers love it."
  },
  {
    name: "Sarah Lee",
    handle: "@sarahgrowth",
    text: "The automation flows are insane. Set once and results keep coming."
  },
  {
    name: "Mark Evans",
    handle: "@markevans",
    text: "Honestly one of the best DTC tools we’ve used. Smooth onboarding and amazing support."
  }
];

const Post = () => {
  return (
    <section className="post-section">
      <div className="container">
        <div className="post">
          <div className="p-title">
            <h3>
              PostPilot is 🔥 for <span className="style">DTC</span>
            </h3>
          </div>

          {/* Slider */}
          <div className="slider">
            <div className="slider-track">
              {[...posts, ...posts].map((item, index) => (
                <div className="p-card" key={index}>
                  <div className="card-title">
                    <div className="img">
                      <img src={p1} alt="user" />
                      <div className="img-content">
                        <h4>{item.name}</h4>
                        <h5>{item.handle}</h5>
                      </div>
                    </div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

              <div className="post-button">

         <button >TRY IT RISK FREE</button>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
