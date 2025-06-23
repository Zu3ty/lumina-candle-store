import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaGithub } from "react-icons/fa";
import "./Footer.css";

/**
 * Footer component for Lumina store.
 * This component displays:
 * - Brand information and description
 * - Quick navigation links (Home, Shop, Contact)
 * - Newsletter subscription form
 * - Social media icons for Instagram, Facebook, and TikTok
 * - Bottom copyright and developer credit with GitHub link
 */
const Footer = () => {
  return (
    // Semantic footer tag for accessibility
    <footer className="footer">
      {/* Container wraps all footer content for layout */}
      <div className="footer-container">
        {/* Brand Info Section */}
        <div className="footer-section brand">
          {/* Brand name/title */}
          <h4 className="brand-name">Lumina</h4>
          {/* Short descriptive paragraph about the brand */}
          <p className="brand-description">
            Where elegance meets aroma. Handcrafted candles made to calm,
            captivate, and create mood.
          </p>
        </div>

        {/* Quick Navigation Links Section */}
        <div className="footer-section links">
          {/* Section heading */}
          <h5>Quick Links</h5>
          {/* List of navigation links */}
          <ul>
            {/* Home link */}
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            {/* Shop link */}
            <li>
              <a href="/store" className="footer-link">
                Shop
              </a>
            </li>
            {/* Contact link */}
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription and Social Media Section */}
        <div className="footer-section newsletter">
          {/* Section heading */}
          <h5>Stay in Touch</h5>
          {/* Short call to action */}
          <p>Be the first to know about new collections and special offers.</p>

          {/* Newsletter subscription form */}
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()} // Prevents actual form submission
            aria-label="Subscribe to newsletter"
          >
            {/* Email input field */}
            <input
              type="email"
              placeholder="Your email"
              className="newsletter-input"
              required
              aria-required="true"
            />
            {/* Submit button */}
            <button type="submit" className="btn-subscribe">
              Subscribe
            </button>
          </form>

          {/* Social media icons container */}
          <div className="social-icons" role="list">
            {/* Instagram icon with accessible label */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-link"
              role="listitem"
            >
              <FaInstagram />
            </a>
            {/* Facebook icon with accessible label */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-link"
              role="listitem"
            >
              <FaFacebookF />
            </a>
            {/* TikTok icon with accessible label */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="social-link"
              role="listitem"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer bar for copyright and credits */}
      <div className="footer-bottom">
        {/* Copyright notice */}
        <p>© 2025 Lumina. All rights reserved.</p>

        {/* Developer credit */}
        <p>Developed by Chante Schnetler</p>

        {/* GitHub link with icon */}
        <a
          href="https://github.com/Zu3ty"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="github-link"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
