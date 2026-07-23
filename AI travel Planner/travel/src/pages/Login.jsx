import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../services/api";

import bgImage from "../assets/mountain.jpeg";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  setError("");

  if (!email || !password) {
    setError("Please enter email and password.");
    return;
  }

  try {

    setLoading(true);

    const response = await api.post("/auth/login", {
      email,
      password,
    });

    console.log(response.data);

    // Save JWT Token
    localStorage.setItem(
      "token",
      response.data.access_token
    );

    setLoading(false);

    alert("Login Successful!");

    navigate("/dashboard");

  } catch (err) {

    setLoading(false);

    if (err.response) {
      setError(err.response.data.message);
    } else {
      setError("Server Error");
    }

  }

};

  return (
    <>
      

      <div
        className="auth-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay">

          <div className="auth-card">

            <h2>Welcome Back 👋</h2>

            <p>Login to Continue</p>

            {error && <div className="error">{error}</div>}

            <form onSubmit={handleLogin}>

              <div className="input-box">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="input-box">

                <FaLock className="icon" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />

                <span
                  className="eye"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>

              </div>

              <div className="options">

                <label>

                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() =>
                      setRemember(!remember)
                    }
                  />

                  Remember Me

                </label>

                <a href="#">Forgot Password?</a>

              </div>

              <button
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            <span>

              Don't have an account?

              <a href="/signup"> Sign Up</a>

            </span>

          </div>

        </div>

      </div>

    </>
  );
}

export default Login;