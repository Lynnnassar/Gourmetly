import React from 'react';

function Footer() {
  return (
    <footer style={{
      textAlign:'center', padding:'15px', backgroundColor:'#ff7f50', color:'white', marginTop:'20px'
    }}>
      &copy; {new Date().getFullYear()} Gourmetly. All rights reserved.
    </footer>
  );
}

export default Footer;
