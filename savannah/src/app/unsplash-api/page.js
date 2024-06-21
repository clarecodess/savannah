// app/unsplash-api/page.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UnsplashAPI = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl mb-4">Unsplash API</h1>
        <p>Details about the Unsplash API.</p>
      </div>
      <Footer />
    </div>
  );
};

export default UnsplashAPI;
