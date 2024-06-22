import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-purple-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Unsplashed Ricky for Developers</h1>
        <nav className="flex space-x-8">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-lime-300 transition-colors duration-300">
                <strong>HOME</strong>
              </Link>
            </li>
            <li>
              <Link href="/api-use-cases" className="hover:text-lime-300 transition-colors duration-300">
                <strong>API USES</strong>
              </Link>
            </li>
            {/* Add more nav links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
