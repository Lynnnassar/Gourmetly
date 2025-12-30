import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav style={{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding:'12px 25px',
      backgroundColor:'#ff7f50'
    }}>
      <div style={{ fontWeight:'bold', fontSize:'24px', color:'white' }}>
        Gourmetly
      </div>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/recipes" style={linkStyle}>Recipes</Link>
        <Link to="/mealplan" style={linkStyle}>Meal Plan</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
}

const linkStyle = {
  margin:'0 10px',
  color:'white',
  fontWeight:'500'
};

export default Navbar;
