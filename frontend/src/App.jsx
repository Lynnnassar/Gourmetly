import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider, useData } from "./context/DataContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import MealPlan from "./pages/MealPlan";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// ===== Private Route Component =====
function PrivateRoute({ children }) {
  const { user } = useData();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<RecipeDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />

              {/* Private Routes */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/mealplan"
                element={
                  <PrivateRoute>
                    <MealPlan />
                  </PrivateRoute>
                }
              />

              {/* Catch-all */}
              <Route path="*" element={<p className="text-center mt-10">Page Not Found</p>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}
