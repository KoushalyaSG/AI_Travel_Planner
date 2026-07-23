import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import api from "../services/api";

import bgImage from "../assets/mountain.jpeg";
import "../styles/Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    setError("");

    if (
      !fullName ||
      !email ||
    
      !password ||
      !confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    setLoading(true);

api.post("/auth/register", {
  username: fullName,
  email: email,
  password: password,
})
.then((response) => {
  setLoading(false);

  alert(response.data.message);

  navigate("/");
})
.catch((error) => {
  setLoading(false);

  console.log("FULL ERROR:", error);

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Data:", error.response.data);

    setError(error.response.data.message);
  } else if (error.request) {
    console.log("Request:", error.request);
    setError("Cannot connect to backend");
  } else {
    console.log("Message:", error.message);
    setError(error.message);
  }
});
  }

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="auth-card">
          <h2>Create Account ✈️</h2>
          <p>Start Your Journey</p>

          {error && <div className="error">{error}</div>}

          <form onSubmit={handleSignup}>
            <div className="input-box">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

              <span
                className="eye"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={() =>
                    setAcceptTerms(!acceptTerms)
                  }
                />
                I accept Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <span>
            Already have an account?
            <Link to="/"> Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;