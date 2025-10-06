import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const API_BASE_URL = 'https://rickandmortyapi.com/api';


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
    
      <div className="App">
        <h1>Rick and Morty Fan App</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/characters">Characters</Link></li>
            <li><Link to="/episodes">Episodes</Link></li>
            <li><Link to="/location">Locations</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Locations />} />
        </Routes>
      </div>
  );
}

export default App;