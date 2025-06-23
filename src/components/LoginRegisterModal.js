import React, { useState, useEffect } from "react";
import "./LoginRegisterModal.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Modal component for login and registration
function LoginRegisterModal({ isLogin, onClose, switchForm, onLoginSuccess }) {
  // State for registration form fields
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  // Extra states
  const [confirmPassword, setConfirmPassword] = useState(""); // For register
  const [errors, setErrors] = useState({}); // Form validation errors

  // State for login fields
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Load saved login credentials from localStorage if "Remember Me" was checked
  useEffect(() => {
    const savedLogin = JSON.parse(localStorage.getItem("rememberedLogin"));
    if (savedLogin) {
      setEmailOrUsername(savedLogin.usernameOrEmail);
      setLoginPassword(savedLogin.password);
      setRememberMe(true);
    }
  }, []);

  // Validation helpers
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password); // At least one capital & number

  // Handles input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Registration handler
  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};

    const trimmedData = {
      firstName: formData.firstName.trim(),
      surname: formData.surname.trim(),
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    // Input validations
    if (!trimmedData.firstName) newErrors.firstName = "First name required";
    if (!trimmedData.surname) newErrors.surname = "Surname required";
    if (!trimmedData.username) newErrors.username = "Username required";
    if (!validateEmail(trimmedData.email)) newErrors.email = "Invalid email";
    if (!validatePassword(trimmedData.password)) {
      newErrors.password =
        "Password must be 8+ characters, include a capital letter and number";
    }
    if (trimmedData.password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check if user exists
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(
      (u) =>
        u.username === trimmedData.username || u.email === trimmedData.email
    );

    if (userExists) {
      alert("User already exists with this email or username.");
      return;
    }

    // Save user to localStorage
    const updatedUsers = [...existingUsers, trimmedData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert(`Registered successfully as ${trimmedData.username}`);
    onLoginSuccess(trimmedData.username);
    onClose(); // Close modal
  };

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();

    if (!emailOrUsername.trim() || !loginPassword.trim()) {
      setLoginError("Please fill in both fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) =>
        (user.username === emailOrUsername || user.email === emailOrUsername) &&
        user.password === loginPassword
    );

    if (foundUser) {
      // Handle "Remember Me"
      if (rememberMe) {
        localStorage.setItem(
          "rememberedLogin",
          JSON.stringify({
            usernameOrEmail: emailOrUsername,
            password: loginPassword,
          })
        );
      } else {
        localStorage.removeItem("rememberedLogin");
      }

      onLoginSuccess(foundUser.username);
      setLoginError("");
      onClose(); // Close modal
    } else {
      setLoginError("Invalid email/username or password");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2>{isLogin ? "Login to Lumina" : "Register for Lumina"}</h2>

        {/* Shared form for login/register */}
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <>
              {/* Registration fields */}
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && (
                  <small className="error">{errors.firstName}</small>
                )}
              </label>

              <label>
                Surname
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  required
                />
                {errors.surname && (
                  <small className="error">{errors.surname}</small>
                )}
              </label>

              <label>
                Username
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                {errors.username && (
                  <small className="error">{errors.username}</small>
                )}
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && (
                  <small className="error">{errors.email}</small>
                )}
              </label>

              {/* Password field with toggle visibility */}
              <label>
                Password
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <small className="error">{errors.password}</small>
                )}
              </label>

              <label>
                Confirm Password
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {errors.confirmPassword && (
                  <small className="error">{errors.confirmPassword}</small>
                )}
              </label>
            </>
          )}

          {isLogin && (
            <>
              {/* Login fields */}
              <label>
                Email or Username
                <input
                  type="text"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  required
                />
              </label>

              <label>
                Password
                <div className="password-wrapper">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  >
                    {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </label>

              {/* Remember me checkbox */}
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>

              {loginError && <small className="error">{loginError}</small>}
            </>
          )}

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            {isLogin ? "Sign in" : "Register"}
          </button>
        </form>

        {/* Switch between Login and Register */}
        <div className="switch-form">
          {isLogin ? (
            <>
              No online profile?{" "}
              <button onClick={switchForm} className="switch-btn">
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
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
