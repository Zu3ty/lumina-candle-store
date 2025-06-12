import React, { useState } from "react";
import "./LoginRegisterModal.css";

function LoginRegisterModal({ isLogin, onClose, switchForm }) {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? "Logging in" : "Registering"} with ${emailOrMobile}`);
  };

  const handleForgotPassword = () => {
    alert("Forgot password flow triggered");
    // You can implement your forgot password logic here or open another modal
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2>{isLogin ? "Login to Lumina" : "Register for Lumina"}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Email or mobile number
            <input
              type="text"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              required
              autoFocus
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {isLogin && (
            <div className="forgot-password">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="link-button"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Sign in with password" : "Register"}
          </button>
        </form>

        <div className="switch-form">
          {isLogin ? (
            <>
              No online profile?
              <button onClick={switchForm} className="switch-btn">
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button onClick={switchForm} className="switch-btn">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterModal;
