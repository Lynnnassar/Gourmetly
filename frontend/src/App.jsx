import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import MealPlan from './pages/MealPlan';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { DataProvider } from './context/DataContext';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DataProvider>
      <Router>
        {/* App Wrapper makes footer stick to bottom */}
        <div className={`app-wrapper ${darkMode ? 'dark' : ''}`}>
          
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />

          {/* Main content expands to push footer down */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<RecipeDetail />} />
              <Route path="/mealplan" element={<MealPlan />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
