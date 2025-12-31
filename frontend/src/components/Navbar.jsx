import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function Navbar() {
  const { user, logout } = useData();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Gourmetly</Link>

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {user && (
            <>
              <li><Link to="/mealplan">Meal Plan</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li>
                <button className="btn btn-sm btn-secondary" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}

          {!user && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
