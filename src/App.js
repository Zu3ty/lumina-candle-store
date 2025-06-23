import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Context providers for Cart and Wishlist state management
import { CartProvider, useCart } from "./redux/CartContext";
import { WishlistProvider, useWishlist } from "./redux/WishlistContext";

// Components & Pages imports
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PromoBanner from "./components/PromoBanner";
import LandingPage from "./pages/LandingPage";
import StorePage from "./pages/StorePage";
import CartDrawer from "./pages/CartDrawer";
import WishlistDrawer from "./pages/WishlistDrawer";
import Footer from "./components/Footer";
import LoginRegisterModal from "./components/LoginRegisterModal";

// Main app content which uses router location and context hooks
function AppContent() {
  const location = useLocation();

  // Define routes where the promo banner should be hidden
  const hiddenRoutes = ["/cart"];
  const shouldHideBanner = hiddenRoutes.includes(location.pathname);

  // Access cart context data and functions
  const { cartItems, addToCart, removeFromCart, updateQty } = useCart();
  // Access wishlist context data and functions
  const { wishlistItems, addToWishlist } = useWishlist();

  // UI state for modals, drawers, login, and user
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  // State for search query and selected product category (for filtering)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handler to update search query and category filters
  const handleSearch = (query, category) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  const handleCategoryChange = (category, query) => {
    setSelectedCategory(category);
    setSearchQuery(query);
  };

  // Simple logout clears the current user
  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Moves an item from the cart to the wishlist
  const handleMoveToWishlist = (productId) => {
    const item = cartItems.find((item) => item.product.id === productId);
    if (item) {
      addToWishlist(item.product);
      removeFromCart(productId);
    }
  };

  return (
    <>
      {/* Header with callbacks for cart, wishlist, login/logout */}
      <Header
        onCartClick={() => setCartOpen(true)}
        onWishlistClick={() => setWishlistOpen(true)}
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
        currentUser={currentUser}
        onLoginClick={() => setShowModal(true)}
        onLogoutClick={handleLogout}
      />

      {/* Render SearchBar ONLY on /store page */}
      {location.pathname === "/store" && (
        <SearchBar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
        />
      )}

      {/* Show promo banner unless current route is hidden */}
      {!shouldHideBanner && <PromoBanner />}

      <main>
        {/* Routing to LandingPage or StorePage */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/store"
            element={
              <StorePage
                addToCart={addToCart}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            }
          />
        </Routes>
      </main>

      {/* Cart drawer sidebar with cart management */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQty={updateQty}
        onMoveToWishlist={handleMoveToWishlist}
      />

      {/* Wishlist drawer sidebar */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />

      {/* Page footer */}
      <Footer />

      {/* Login/Register modal */}
      {showModal && (
        <LoginRegisterModal
          isLogin={isLogin}
          onClose={() => setShowModal(false)}
          switchForm={() => setIsLogin((prev) => !prev)}
          onLoginSuccess={(username) => {
            setCurrentUser(username);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

// Wrap AppContent with providers and Router, then export as default
export default function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <AppContent />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}
