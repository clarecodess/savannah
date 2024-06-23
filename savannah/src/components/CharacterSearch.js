"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CharacterSearch = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  const searchCharacters = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    const data = await response.json();
    setCharacters(data.results);
  };

  const handleMouseEnter = async (character) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${character.id}`);
    const data = await response.json();
    setHoveredCharacter(data);
  };

  const handleMouseLeave = () => {
    setHoveredCharacter(null);
  };

  return (
    <div className="p-4">
        
        <h2 className="text-2xl font-bold text-center mb-4">
        Search and view details to learn more about your favorite characters
      </h2>
      <form onSubmit={searchCharacters} className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for characters..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded mr-2 w-full md:w-1/2"
        />
        <button type="submit" className="p-2 bg-purple-800 text-white rounded">Search</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {characters.map(character => (
          <div
            key={character.id}
            className="relative rounded overflow-hidden shadow-lg hover:bg-gray-100"
            onMouseEnter={() => handleMouseEnter(character)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={character.image}
              alt={character.name}
              className="w-full h-auto"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg text-purple-700">{character.name}</h3>
            </div>
            {hoveredCharacter && hoveredCharacter.id === character.id && (
              <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 p-4 flex flex-col items-center justify-center text-center z-10">
                <h3 className="text-xl font-bold mb-2">{hoveredCharacter.name}</h3>
                <p><strong>Status:</strong> {hoveredCharacter.status}</p>
                <p><strong>Species:</strong> {hoveredCharacter.species}</p>
                <p><strong>Gender:</strong> {hoveredCharacter.gender}</p>
                <p><strong>Origin:</strong> {hoveredCharacter.origin.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSearch;
