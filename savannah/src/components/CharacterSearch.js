"use client";
import React, { useState, useEffect } from 'react';

const CharacterSearch = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const searchCharacters = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    const data = await response.json();
    setCharacters(data.results);
  };

  const viewCharacterDetails = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    setSelectedCharacter(data);
  };

  return (
    <div className="p-4">
      <form onSubmit={searchCharacters} className="mb-4">
        <input
          type="text"
          placeholder="Search for characters..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button type="submit" className="p-2 bg-purple-800 text-white rounded">Search</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {characters.map(character => (
          <div key={character.id} className="rounded overflow-hidden shadow-lg">
            <img src={character.image} alt={character.name} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="text-lg text-purple-700">{character.name}</h3>
              <button
                onClick={() => viewCharacterDetails(character.id)}
                className="mt-2 bg-cyan-400 hover:bg-lime-300 text-purple-800 font-bold py-2 px-4 rounded-full"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div className="mt-8 p-4 border rounded shadow-lg">
          <h2 className="text-2xl mb-4 text-purple-800">{selectedCharacter.name}</h2>
          <p><strong>Status:</strong> {selectedCharacter.status}</p>
          <p><strong>Species:</strong> {selectedCharacter.species}</p>
          <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
          <p><strong>Origin:</strong> {selectedCharacter.origin.name}</p>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-full h-auto mt-4" />
        </div>
      )}
    </div>
  );
};

export default CharacterSearch;
