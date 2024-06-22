"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const navigateToUnsplash = () => {
    router.push('/unsplash-api');
  };

  const navigateToRickAndMorty = () => {
    router.push('/rick-and-morty-api');
  };

  return (
    <section className="bg-gradient-to-r from-purple-800 to-indigo-800 text-lime-300 p-10 text-center">
      <h2 className="text-4xl font-extrabold mb-8">Welcome to Unsplashed Ricky</h2>
      <p className="text-lg mb-8">Discover how to use the Unsplash and Rick & Morty APIs for your projects.</p>
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={navigateToUnsplash}
          className="bg-cyan-400 hover:bg-lime-300 text-purple-800 font-bold py-2 px-4 rounded-full transition transform hover:scale-105"
        >
          Search for Images with Unsplash API
        </button>
        <button
          onClick={navigateToRickAndMorty}
          className="bg-cyan-400 hover:bg-lime-300 text-purple-800 font-bold py-2 px-4 rounded-full transition transform hover:scale-105"
        >
          Get all Episodes with Rick and Morty API
        </button>
      </div>
    </section>
  );
};

export default Hero;
