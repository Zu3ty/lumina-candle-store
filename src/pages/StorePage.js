import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "../pages/StorePage.css";

// 📦 Import product images
import caramel from "../assets/caramel.jpg";
import pine from "../assets/PineconePals.jpg";
import ocean from "../assets/ocean.jpg";
import lavender from "../assets/Lavenderlullaby.jpg";

const StorePage = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: "1",
      name: "Caramel",
      price: 20,
      category: "Limited edition",
      stock: 10,
      image: caramel,
      reviews: [
        { id: 1, rating: 5 },
        { id: 2, rating: 4 },
      ],
    },
    {
      id: "2",
      name: "Soy Candle",
      price: 18,
      category: "Limited edition",
      stock: 3,
      image: pine,
      reviews: [{ id: 3, rating: 5 }],
    },
    {
      id: "3",
      name: "Decorative Vase",
      price: 35,
      category: "Limited edition",
      stock: 0,
      image: ocean,
      reviews: [{ id: 4, rating: 3 }],
    },
    {
      id: "4",
      name: "Aromatherapy Diffuser",
      price: 50,
      category: "Signature Collection",
      stock: 8,
      image: lavender,
      reviews: [{ id: 5, rating: 4 }],
    },
  ];

  const groupedProducts = products.reduce((groups, product) => {
    (groups[product.category] = groups[product.category] || []).push(product);
    return groups;
  }, {});

  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState("");

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    dispatch(addItem(product));
    setToast(`${product.name} added to cart!`);
    setTimeout(() => setToast(""), 2000);
  };

  const averageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round(sum / reviews.length);
  };

  const renderStars = (count) => "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div className="store-container">
      {toast && <div className="toast">{toast}</div>}

      {Object.entries(groupedProducts).map(([category, items]) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {items.map((p) => (
              <div key={p.id} className="product-card">
                <img src={p.image} alt={p.name} />
                <h4 className="product-name">{p.name}</h4>
                <p className="product-price">Price: R{p.price}</p>

                <p
                  className={`stock-status ${
                    p.stock === 0
                      ? "out-of-stock"
                      : p.stock < 5
                      ? "limited-stock"
                      : "in-stock"
                  }`}
                >
                  {p.stock === 0
                    ? "Out of stock"
                    : p.stock < 5
                    ? `Only ${p.stock} left!`
                    : "In stock"}
                </p>

                <button
                  className={`wishlist-button ${
                    wishlist.includes(p.id) ? "active" : ""
                  }`}
                  onClick={() => toggleWishlist(p.id)}
                  aria-label="Add to wishlist"
                >
                  ♥
                </button>

                <button
                  onClick={() => handleAddToCart(p)}
                  disabled={p.stock === 0}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>

                <div
                  className="average-rating"
                  title={`${averageRating(p.reviews)} out of 5 stars`}
                >
                  {renderStars(averageRating(p.reviews))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default StorePage;
