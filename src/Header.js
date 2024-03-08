import React from 'react';
import logo from './AppLogo.png'; // Replace this with the path to your image

function Header() {
  return (
    <div className='box'> 
      <h1 className="borel-regular">Web Warden</h1>
      <img src={logo} alt="Web Warden Logo" style={{ marginLeft: '20px', width: '50px', height: '50px' }} />
    </div>
  );
}

export default Header;
