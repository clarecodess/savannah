import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">API Documentation</h1>
      <nav>
        <ul className="flex space-x-4">
        
          <li><Link href="/">Home</Link></li>
          <li><Link href="#unsplash">Unsplash API</Link></li>
          <li><Link href="#rickandmorty">Rick & Morty API</Link></li>
          <li><Link href="#howtouse">How to Use</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
