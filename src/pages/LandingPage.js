import React, { useRef, useState, useEffect } from "react";
import "./LandingPage.css";
import { useCart } from "../redux/CartContext";
import { useWishlist } from "../redux/WishlistContext";
import { FaFire } from "react-icons/fa";

// === Product Images ===
import product1 from "../assets/sundae.jpg";
import product2 from "../assets/cherry2.jpg";
import product3 from "../assets/waffle.jpg";
import product4 from "../assets/raspberry.jpg";
import product5 from "../assets/buttermilk.jpg";
import product6 from "../assets/apple.jpg";
import product7 from "../assets/zesty.jpg";
import product8 from "../assets/cc.jpg";
import product9 from "../assets/coconut.jpg";
import product10 from "../assets/strawberry.jpg";

// === Slideshow Images for About Section ===
import store1 from "../assets/exterior.jpg";
import store2 from "../assets/interior.jpg";
import slide1 from "../assets/scent.jpg";
import slide2 from "../assets/factory.jpg";

// === Product Data ===
const productImages = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

const products = [
  {
    id: 1,
    name: "Chocolate Sundae Dream",
    image: productImages[0],
    price: 149.99,
  },
  {
    id: 2,
    name: "Wild Cherry Crumble",
    image: productImages[1],
    price: 139.99,
  },
  { id: 3, name: "Blueberry Waffles", image: productImages[2], price: 129.99 },
  {
    id: 4,
    name: "Chocolate Raspberry Torte",
    image: productImages[3],
    price: 119.99,
  },
  {
    id: 5,
    name: "Buttermilk Pancakes & Syrup",
    image: productImages[4],
    price: 139.99,
  },
  {
    id: 6,
    name: "Caramel Apple Delight",
    image: productImages[5],
    price: 144.99,
  },
  { id: 7, name: "Lemon Cream Tart", image: productImages[6], price: 124.99 },
  { id: 8, name: "Cookies & Cream", image: productImages[7], price: 149.99 },
  {
    id: 9,
    name: "Strawberry Milkshake",
    image: productImages[9],
    price: 134.99,
  },
  {
    id: 10,
    name: "Toasted Coconut Brownie",
    image: productImages[8],
    price: 139.99,
  },
];

// === About Section Slideshow Images ===
const aboutImages = [
  { id: 1, src: store1, alt: "Lumina Store Front 1" },
  { id: 2, src: store2, alt: "Lumina Store Front 2" },
  { id: 3, src: slide1, alt: "Lumina Product 1" },
  { id: 4, src: slide2, alt: "Lumina Product 2" },
];

function LandingPage() {
  const scrollRef = useRef(); // Reference to the product carousel container
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const [currentIndex, setCurrentIndex] = useState(0); // for image slideshow
  const [addedProductId, setAddedProductId] = useState(null); // for Add to Cart feedback

  // === Auto-change images in About slideshow every 5s ===
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // === Auto-scroll carousel horizontally every 8s ===
  useEffect(() => {
    const autoScroll = setInterval(() => {
      const container = scrollRef.current;
      const scrollAmount = 300;

      if (container) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 8000);

    return () => clearInterval(autoScroll);
  }, []);

  // === Manual scroll with arrow buttons ===
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // === Add to Cart handler ===
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000); // Reset after 2s
  };

  // === Wishlist toggle ===
  const toggleWishlist = (product) => {
    isWishlisted(product.id)
      ? removeFromWishlist(product.id)
      : addToWishlist(product);
  };

  return (
    <div className="landing">
      {/* ======= Product Section ======= */}
      <h2 className="section-title">Newest Arrivals</h2>

      <div className="carousel-wrapper">
        {/* Left Scroll Button */}
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8592;
        </button>

        {/* Product Carousel */}
        <div className="carousel" ref={scrollRef}>
          {products.map((product) => {
            const wished = isWishlisted(product.id);
            return (
              <div className="landing-product-card" key={product.id}>
                <div className="landing-new-label">NEW</div>

                <button
                  className={`landing-wishlist-heart ${wished ? "active" : ""}`}
                  aria-label={
                    wished ? "Remove from wishlist" : "Add to wishlist"
                  }
                  onClick={() => toggleWishlist(product)}
                >
                  {wished ? "♥" : "♡"}
                </button>

                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>R{product.price.toFixed(2)}</p>
                <button
                  className="landing-buy-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  {addedProductId === product.id ? "Added!" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>

      {/* ======= About Section with Slideshow ======= */}
      <div className="about-container">
        <div className="about-text">
          <h3>The Story of Lumina</h3>
          <p>
            Lumina began as a heartfelt passion project in 2010, born from a
            simple dream — to fill homes with warmth, comfort, and the gentle
            glow of handcrafted candles. What started as a few hand-poured
            creations in a small kitchen has since grown into a beloved brand,
            known for its dedication to quality, sustainability, and beauty.
            Each Lumina candle is thoughtfully made with premium ingredients and
            inspired by everyday moments — from cozy evenings and joyful
            celebrations to quiet mornings and fresh beginnings. Our mission has
            always been to turn the ordinary into something extraordinary, one
            flicker at a time.
          </p>
        </div>

        <div className="fade-slideshow">
          {aboutImages.map((img, idx) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={`fade-image ${idx === currentIndex ? "visible" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* ======= Newsletter Signup Section ======= */}
      <div className="newsletter-section">
        <div className="newsletter-box">
          <div className="newsletter-left">
            <h3>REACH THE FULL MELT POOL -</h3>
            <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <ul className="newsletter-perks">
              <li>
                <FaFire className="perk-icon" /> Get the inside scoop on our
                latest products
              </li>
              <li>
                <FaFire className="perk-icon" /> Be first in line for flash
                sales and seasonal deals
              </li>
              <li>
                <FaFire className="perk-icon" /> Recipes delivered to your inbox
              </li>
              <li>
                <FaFire className="perk-icon" /> Trade secrets to grow your
                skills
              </li>
            </ul>
          </div>

          <form className="newsletter-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
