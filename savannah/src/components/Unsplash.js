"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos?client_id=9gMyfQ5_9gZSTEDKrud01d0loCZowDij2e_iI--fjB4')
      .then(res => res.json())
      .then(data => setPhotos(data.slice(0, 4)));
  }, []);

  return (
    <section className="py-12 bg-gray-100" id="unsplash">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Photos from Unsplash</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map(photo => (
            <div 
              key={photo.id} 
              className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <Image 
                src={photo.urls.small} 
                alt={photo.description || "Unsplash photo"} 
                className="w-full h-auto" 
                width={500} 
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
