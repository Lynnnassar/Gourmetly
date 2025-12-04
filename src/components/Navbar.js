import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`} style={{
      display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 20px', backgroundColor:'#ff7f50'
    }}>
      <div style={{ fontWeight:'bold', fontSize:'24px', color:'white' }}>Gourmetly</div>
      <div>
        <Link to="/" style={{ margin:'0 10px', color:'white' }}>Home</Link>
        <Link to="/about" style={{ margin:'0 10px', color:'white' }}>About</Link>
        <Link to="/recipes" style={{ margin:'0 10px', color:'white' }}>Recipes</Link>
        <Link to="/mealplan" style={{ margin:'0 10px', color:'white' }}>Meal Plan</Link>
        <Link to="/contact" style={{ margin:'0 10px', color:'white' }}>Contact</Link>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
}

export default Navbar;
