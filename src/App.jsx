import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  fetch(`${API_BASE_URL}/character`)
  .then(res => res.json())
  .then(data => console.log(data));


  return (
    <>
     <h1>Jennifer's Page</h1>
    </>
  );
}

export default App;
