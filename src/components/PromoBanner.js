import React from "react";
import "./PromoBanner.css";
import bannerImg from "../assets/banner.jpg"; // ✅ Ensure this image exists

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <img
        src={bannerImg}
        alt="Fragrance of the Month"
        className="promo-image"
      />
    </div>
  );
};

export default PromoBanner;
