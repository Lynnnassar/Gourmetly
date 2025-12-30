import React from 'react';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} style={{ marginLeft: '15px', backgroundColor:'#fff', color:'#ff7f50'}}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
