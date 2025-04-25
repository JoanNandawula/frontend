// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} QuickCart. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
