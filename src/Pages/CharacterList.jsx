import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../features/characters/characterSlice';

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.items);
  const status = useSelector(state => state.characters.status);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="character-list">
      <h2>Rick and Morty Characters</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Failed to load characters.</p>}
    </div>
  );
};

export default CharacterList;
