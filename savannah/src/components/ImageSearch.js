"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=9gMyfQ5_9gZSTEDKrud01d0loCZowDij2e_iI--fjB4`);
    const data = await response.json();
    setPhotos(data.results);
  };

  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Search and download for images to use in blog posts, articles, and marketing materials</h2>
      <form onSubmit={searchPhotos} className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search term..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded mr-2 w-full md:w-1/2"
        />
        <button type="submit" className="p-2 bg-purple-800 text-white rounded">Search</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="rounded overflow-hidden shadow-lg">
            <Image 
              src={photo.urls.small} 
              alt={photo.description || "Unsplash photo"} 
              className="w-full h-auto" 
              width={500} 
              height={500}
            />
            <div className="p-4">
              <a
                href={photo.links.download}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 underline"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
