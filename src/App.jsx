import { useState, useEffect } from 'react';
//import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

 useEffect(() => {
    fetch(`${API_BASE_URL}/character`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched in App:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>
     <div>
      <h1>Rick and Morty Fan App</h1>
      <CharacterList />
     </div>
    </>
  );
}

export default App;
