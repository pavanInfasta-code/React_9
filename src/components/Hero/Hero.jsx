import React from "react";
import "./Hero.css";
import hero from "../../assets/Hero/hero-right.png";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero">
          <div className="hero-left h-side">
            <h1>
              Meet your <span className="style">favorite</span> new (old) marketing channel.
            </h1>

            <p>
              Remarkable results. Easier than email. Postcard marketing
              reinvented for modern ecommerce.
            </p>

            <div className="hero-btn">
              <div className="h-btn">
                <button>TRY IT RISK-FREE</button>
              </div>

                  <div className="stars">
                      <div className="h-star" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>

                        <div className="s-p">
                          <p>5.0 Shopify Rating</p>
                        </div>
                  </div>
            </div>
          </div>

          <div className="hero-right h-side">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
