import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl flex-1">Unsplashed Ricky for Developers</h1>
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-4 hover:text-lime-300">
            <li><h2><Link href="/">Home</Link></h2></li>
          </ul>
        </nav>
        <div className="flex-1 flex justify-end">
          <ul className="flex space-x-4 hover:text-lime-300">
            <li><h2><Link href="/login">Login</Link></h2></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
