import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white p-6 text-center">
      <p className="mb-4">&copy; 2024 Unsplashed Ricky. All rights reserved.</p>
      <nav>
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-300 transition-colors duration-300"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-300 transition-colors duration-300"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
