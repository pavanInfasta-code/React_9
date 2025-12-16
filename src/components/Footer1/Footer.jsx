import React from "react";
import { useNavigate } from "react-router-dom";
import eco from "../../assets/Footer/eco.png";
import logo from "../../assets/Nav/logo.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer">
          {/* Column 1 */}
          <div className="f1 f">
            <div className="logo">
              <img src={eco} alt="Eco Friendly" />
            </div>
            <p>
              Our paper is sourced from FSC-certified mills. We plant enough
              trees to more than double our paper usage.
            </p>
          </div>

          {/* Column 2 */}
          <div className="f2 f">
            <h2>COMPANY</h2>

            <ul>
              <li>About us</li>
              <li>Partner program</li>
              <li>Career</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="f3">
              <h2>DEATILES</h2>
            <ul>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Direct Mail Academy</li>
              <li>Success stories</li>
              <li>Terms & conditions</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="f4 f">
            <h2>CONTACT</h2>

            <div className="mail">
              <p>
                <i className="fa-solid fa-envelope"></i>
                support@postpilot.com
              </p>
            </div>

            <p id="heart">
              Printed with <i className="fa-solid fa-heart"></i> at our facility
              in South Carolina.
            </p>
          </div>
        </div>

        <hr className="line" />

        {/* Bottom Footer */}
        <div className="footer2">
          <div className="logo2">
            <div className="nav-left">
              <img src={logo} alt="PostPilot Logo" className="footer-logo" />
              <p>© 2022 PostPilot, Inc. All rights reserved.</p>
            </div>

            <div className="buttons">
              <button className="login" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="signup" onClick={() => navigate("/signup")}>
                Create free account
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
