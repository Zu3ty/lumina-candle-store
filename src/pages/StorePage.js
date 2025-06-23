import React from "react";
import "./StorePage.css";

import { useWishlist } from "../redux/WishlistContext";

// Import product images
import orchidImg from "../assets/orchid.jpg";
import LilacImg from "../assets/lilac.jpg";
import picnicImg from "../assets/picnic.jpg";
import rosesImg from "../assets/roses.jpg";
import cabinImg from "../assets/cabin.jpg";
import frostingImg from "../assets/frosting.jpg";
import rainImg from "../assets/rain.jpg";
import cherryImg from "../assets/cherry.jpg";
import honeyImg from "../assets/honey.jpg";

import pumpkinImg from "../assets/pumpkin.jpg";
import oceanImg from "../assets/ocean.jpg";
import rosewoodImg from "../assets/rosewood.jpg";
import peachImg from "../assets/peach.jpg";
import cashmereImg from "../assets/cashmere.jpg";
import serenityImg from "../assets/serenity.jpg";

import sundaeImg from "../assets/sundae.jpg";
import waffleImg from "../assets/waffle.jpg";
import raspImg from "../assets/raspberry.jpg";
import milkImg from "../assets/buttermilk.jpg";
import appleImg from "../assets/apple.jpg";
import zestyImg from "../assets/zesty.jpg";
import ccImg from "../assets/cc.jpg";
import strawberry2Img from "../assets/strawberry.jpg";
import coconutImg from "../assets/coconut.jpg";

// Array of all product objects with details like name, category, image, rating, stock, description, and price
const products = [
  {
    id: 1,
    name: "Vanilla Orchid",
    category: "Signature Collection",
    image: orchidImg,
    rating: 4,
    stock: 5,
    description: "A gentle floral breeze, with blooming lilacs",
    price: 100,
  },
  {
    id: 2,
    name: "Lilac Garden",
    category: "Signature Collection",
    image: LilacImg,
    rating: 5,
    stock: 0,
    description: "Lilac and peonie breeze.",
    price: 100,
  },
  {
    id: 3,
    name: "Summer Picnic",
    category: "Signature Collection",
    image: picnicImg,
    rating: 3,
    stock: 2,
    description: "Juicy strawberry, crisp lemonade, and freshly cut grass",
    price: 125,
  },
  {
    id: 4,
    name: "Fresh Cut Roses",
    category: "Signature Collection",
    image: rosesImg,
    rating: 5,
    stock: 10,
    description: "Classic fresh roses with a hint of morning dews",
    price: 150,
  },
  {
    id: 5,
    name: "Cozy Cabin",
    category: "Signature Collection",
    image: cabinImg,
    rating: 4,
    stock: 3,
    description: "Crisp pinewood, toasted marshmallow",
    price: 100,
  },
  {
    id: 6,
    name: "Buttercream Frosting",
    category: "Signature Collection",
    image: frostingImg,
    rating: 2,
    stock: 0,
    description: "Sweet whipped vanilla frosting",
    price: 50,
  },
  {
    id: 7,
    name: "Soft Rainfall",
    category: "Signature Collection",
    image: rainImg,
    rating: 4,
    stock: 7,
    description: "Gentle rain, fresh mist, and clean earth",
    price: 95,
  },
  {
    id: 8,
    name: "Cherry Blossom Kiss",
    category: "Signature Collection",
    image: cherryImg,
    rating: 4,
    stock: 7,
    description: "Sweet cherry blossoms",
    price: 125,
  },
  {
    id: 9,
    name: "Sunflower & Honey",
    category: "Signature Collection",
    image: honeyImg,
    rating: 4,
    stock: 0,
    description: "Bright sunflowers and rich wild honey",
    price: 149.99,
  },
  {
    id: 10,
    name: "Cinnamon Snuggle",
    category: "Bestsellers",
    image: pumpkinImg,
    rating: 4,
    stock: 7,
    description: "Cozy cinnamon, clove, and pumpkin spice blend",
    price: 250,
  },
  {
    id: 11,
    name: "Seashell Serenade",
    category: "Bestsellers",
    image: oceanImg,
    rating: 4,
    stock: 7,
    description: "Sea breeze with hints of salt and jasmine",
    price: 250,
  },
  {
    id: 12,
    name: "Frosted Rosewood",
    category: "Bestsellers",
    image: rosewoodImg,
    rating: 4,
    stock: 7,
    description: "Rosewood, peony, cedar musk",
    price: 250,
  },
  {
    id: 13,
    name: "Peach Birch",
    category: "Bestsellers",
    image: peachImg,
    rating: 4,
    stock: 7,
    description: "Ripe peach, birchwood, white musk",
    price: 250,
  },
  {
    id: 14,
    name: "Coconut Cashmere",
    category: "Bestsellers",
    image: cashmereImg,
    rating: 4,
    stock: 7,
    description: "Coconut milk, sandalwood, amber",
    price: 250,
  },
  {
    id: 15,
    name: "Eucalyptus Ember",
    category: "Bestsellers",
    image: serenityImg,
    rating: 5,
    stock: 11,
    description: "Smoked eucalyptus, firewood, minty herbs",
    price: 139.99,
  },
  {
    id: 16,
    name: "Chocolate Sundae Dream",
    category: "Newest Arrivals",
    image: sundaeImg,
    rating: 4,
    stock: 7,
    description: "Fudge brownie, vanilla bean, chocolate syrup",
    price: 149.99,
  },
  {
    id: 17,
    name: "Blueberry Waffles",
    category: "Newest Arrivals",
    image: waffleImg,
    rating: 4,
    stock: 5,
    description: "Blueberry syrup, batter, maple syrup",
    price: 129.99,
  },
  {
    id: 18,
    name: "Chocolate Raspberry Torte",
    category: "Newest Arrivals",
    image: raspImg,
    rating: 3,
    stock: 8,
    description: "Cocoa and ripe raspberries",
    price: 119.99,
  },
  {
    id: 19,
    name: "Buttermilk Pancakes & Syrup",
    category: "Newest Arrivals",
    image: milkImg,
    rating: 5,
    stock: 12,
    description: "Buttermilk, maple, vanilla",
    price: 139.99,
  },
  {
    id: 20,
    name: "Caramel Apple Delight",
    category: "Newest Arrivals",
    image: appleImg,
    rating: 4,
    stock: 6,
    description: "Apple, caramel, cinnamon",
    price: 144.99,
  },
  {
    id: 21,
    name: "Lemon Cream Tart",
    category: "Newest Arrivals",
    image: zestyImg,
    rating: 4,
    stock: 9,
    description: "Zesty lemon, cream, graham crust",
    price: 124.99,
  },
  {
    id: 22,
    name: "Cookies & Cream",
    category: "Newest Arrivals",
    image: ccImg,
    rating: 5,
    stock: 4,
    description: "Cream, cookies, vanilla",
    price: 149.99,
  },
  {
    id: 23,
    name: "Strawberry Milkshake",
    category: "Newest Arrivals",
    image: strawberry2Img,
    rating: 3,
    stock: 7,
    description: "Strawberry, milk sugar, vanilla bean",
    price: 134.99,
  },
  {
    id: 24,
    name: "Toasted Coconut Brownie",
    category: "Newest Arrivals",
    image: coconutImg,
    rating: 5,
    stock: 11,
    description: "Dark chocolate, toasted coconut",
    price: 139.99,
  },
];

// Component to display star ratings visually
const StarRating = ({ rating }) => (
  <div className="star-rating" aria-label={`Rating: ${rating} out of 5`}>
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ))}
  </div>
);

/**
 * StorePage component renders a grid of products filtered by category and search query.
 * It allows adding/removing items to/from wishlist and adding items to cart.
 *
 * Props:
 * - searchQuery (string): text input to filter products by name
 * - selectedCategory (string): filters products by category; default is "All"
 * - addToCart (function): callback to add a product to the cart
 */
const StorePage = ({
  searchQuery = "",
  selectedCategory = "All",
  addToCart,
}) => {
  // Wishlist context hooks for managing wishlist state
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  // Toggles wishlist status for a product (adds/removes from wishlist)
  const toggleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    // Case-insensitive search matching for product name
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="store-page-container">
      {/* Sidebar removed intentionally to simplify UI */}

      <main className="store-main">
        {/* Page header showing selected category and current search query */}
        <h1>
          {selectedCategory} Products{" "}
          {searchQuery && `- Search: "${searchQuery}"`}
        </h1>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {/* Display 'HOT!' badge for Bestseller category */}
                {product.category === "Bestsellers" && (
                  <span className="hot-badge" aria-label="Bestseller">
                    HOT!
                  </span>
                )}

                {/* Product image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                {/* Product name */}
                <h4>{product.name}</h4>

                {/* Star rating component */}
                <StarRating rating={product.rating} />

                {/* Product description */}
                <p className="product-description">{product.description}</p>

                {/* Product price formatted to two decimals */}
                <p className="product-price">R{product.price.toFixed(2)}</p>

                {/* Stock status with styling for out-of-stock */}
                <p
                  className={`product-stock ${
                    product.stock === 0 ? "out-of-stock" : ""
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>

                {/* Wishlist toggle button */}
                <button
                  className={`wishlist-btn ${
                    isWishlisted(product.id) ? "active" : ""
                  }`}
                  onClick={() => toggleWishlist(product)}
                  aria-label={
                    isWishlisted(product.id)
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                >
                  {isWishlisted(product.id) ? "♥" : "♡"}
                </button>

                {/* Add to cart button disabled if out of stock */}
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            // Message when no products match the filters
            <p>No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default StorePage;
