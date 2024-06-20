"use client";
import React, { useEffect, useState } from 'react';

const Rick = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <section className="p-4" id="rickandmorty">
      <h2 className="text-2xl mb-4">Rick & Morty Characters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map(character => (
          <div key={character.id} className="rounded overflow-hidden shadow-lg">
            <img src={character.image} alt={character.name} />
            <div className="p-4">
              <h3 className="text-lg">{character.name}</h3>
              <p>{character.species}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rick;
