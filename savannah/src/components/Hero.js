import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-purple-800 text-lime-300 p-10 text-center">
      <h2 className="text-2xl mb-8">Welcome to Unsplashed Ricky</h2>
      <p>Discover how to use the Unsplash and Rick & Morty APIs for your projects.</p>
      <div className="mt-8 space-x-4">
        <Link href="/unsplash-api" className="bg-cyan-400 hover:bg-lime-300 text-purple-800 font-bold py-2 px-4 rounded-full inline-block">Unsplash API</Link>
        <Link href="/rick-and-morty-api" className="bg-cyan-400 hover:bg-lime-300 text-purple-800 font-bold py-2 px-4 rounded-full inline-block">Rick and Morty API</Link>
      </div>
    </section>
  );
};

export default Hero;
