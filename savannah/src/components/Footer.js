import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white p-4 text-center">
      <p>&copy; 2024 Unsplashed Ricky. All rights reserved.</p>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
