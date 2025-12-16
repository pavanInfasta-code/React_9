import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ onClose }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        <h2 className="popup-title">Leave a Review</h2>

        {/* Rating */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Review Form */}
        <form className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            className="input-box"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input-box"
          />

          <textarea
            placeholder="Write your review..."
            className="textarea-box"
          ></textarea>

          <button className="submit-btn">Submit Review</button>
        </form>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
