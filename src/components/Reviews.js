import React from "react";
import "./LandingPage.css";

const reviewsData = [
  {
    id: 1,
    name: "Emily R.",
    rating: 5,
    message:
      "I absolutely love this candle! The scent fills my entire room and it's so calming.",
  },
  {
    id: 2,
    name: "James T.",
    rating: 4,
    message: "Beautifully made candles, clean burn, great gift for friends.",
  },
  {
    id: 3,
    name: "Sofia L.",
    rating: 5,
    message:
      "Such a cozy scent! Makes my home feel so warm and inviting every evening.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-rating">
              {"⭐".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="review-message">"{review.message}"</p>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
