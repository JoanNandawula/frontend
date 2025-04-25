import React from 'react';
import './Footer.css';  // Optional: Create a CSS file for custom styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2025 QuickCart. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
          <a href="/terms" className="text-white"> Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
