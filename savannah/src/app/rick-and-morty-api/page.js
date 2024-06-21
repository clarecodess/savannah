// app/rick-and-morty-api/page.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RickAndMortyAPI = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl mb-4">Rick and Morty API</h1>
        <p>Details about the Rick and Morty API.</p>
      </div>
      <Footer />
    </div>
  );
};

export default RickAndMortyAPI;
