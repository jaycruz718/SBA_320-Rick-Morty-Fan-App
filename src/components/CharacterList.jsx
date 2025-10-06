import React, { useEffect, useState } from 'react';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                setCharacters(data.results);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch characters');
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if(loading) return <p>Loading characters...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="character-list">
            <h2>Rick and Morty Characters</h2>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <img src="{character.image}" alt="{character.name}" />
                        <p>{character.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};