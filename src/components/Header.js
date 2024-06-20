// src/components/Header.js

import React from 'react';
import logo from 'src\assests\logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      {/* Additional header content */}
    </header>
  );
};

export default Header;
