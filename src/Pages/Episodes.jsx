import React, { useEffect, useState } from 'react';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(data => setEpisodes(data.results))
      .catch(error => console.error('Error fetching episodes:', error));
  }, []);

  return (
    <div>
      <h2>Episodes</h2>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>
            {episode.episode} - {episode.name} ({episode.air_date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
