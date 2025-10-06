import React, { useEffect, useState } from 'react';

const Locations = () =>  {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(res => res.json())
      .then(data => setLocations(data.results))
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  return (
    <div>
      <h2>Locations</h2>
      <div className="locations-grid">
        {locations.map(locations => (
          <div key={locations.id} className="card">
            <img src={locations.image} alt={locations.name} />
            <p>{locations.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Locations;