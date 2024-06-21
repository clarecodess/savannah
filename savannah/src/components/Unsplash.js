"use client";
import React, { useEffect, useState } from 'react';

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos?client_id=9gMyfQ5_9gZSTEDKrud01d0loCZowDij2e_iI--fjB4')
      .then(res => res.json())
      .then(data => setPhotos(data.slice(0, 3)));
  }, []);

  return (
    <section className="p-4" id="unsplash">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
        {photos.map(photo => (
          <div key={photo.id} className="rounded overflow-hidden shadow-lg">
            <img src={photo.urls.small} alt={photo.description} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Unsplash;
