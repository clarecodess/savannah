"use client";
import React, { useEffect, useState } from 'react';

const Rick = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results.slice(0, 4))); // Displaying more characters
  }, []);

  return (
    <section className="py-12 bg-gray-100" id="rickandmorty">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Rick and Morty Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map(character => (
            <div
              key={character.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img src={character.image} alt={character.name} className="w-full h-56 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">{character.name}</h3>
                <p className="text-gray-700">{character.species}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rick;
