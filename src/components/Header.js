import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaStore, FaShoppingCart, FaUser } from "react-icons/fa";
import LoginRegisterModal from "./LoginRegisterModal";
import CartDrawer from "./CartDrawer"; // Make sure this exists
import logo from "../assets/brandname.png";
import "./Header.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  const openLoginModal = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to="/">
            <img src={logo} alt="Lumina Logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li className="nav-icon">
              <Link to="/">
                <FaHome className="icon-btn" />
                <span className="tooltip">Home</span>
              </Link>
            </li>
            <li className="nav-icon">
              <Link to="/store">
                <FaStore className="icon-btn" />
                <span className="tooltip">Store</span>
              </Link>
            </li>
            <li className="nav-icon">
              <div onClick={() => setCartOpen(true)}>
                <FaShoppingCart className="icon-btn" />
                <span className="tooltip">Cart</span>
              </div>
            </li>
            <li className="nav-icon">
              <div onClick={openLoginModal}>
                <FaUser className="icon-btn" />
                <span className="tooltip">Login/Register</span>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Login/Register Modal */}
      {isModalOpen && (
        <LoginRegisterModal
          isLogin={isLogin}
          onClose={() => setIsModalOpen(false)}
          switchForm={switchForm}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Header;
