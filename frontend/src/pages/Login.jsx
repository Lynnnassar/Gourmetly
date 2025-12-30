import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

function Login() {
  const { /* if you have user auth functions, you can import them */ } = useData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TEMP: simple login logic for demonstration
    if (email && password) {
      console.log("Logged in:", { email, password });
      navigate("/dashboard"); // redirect after login
    } else {
      setError("Please enter both email and password");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="mb-3">Login</h2>
        {error && <p className="error-text">{error}</p>}

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Create one here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
