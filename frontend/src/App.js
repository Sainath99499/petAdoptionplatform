// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/pets`)
      .then((res) => setPets(res.data))
      .catch((err) => console.error('Error fetching pets:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🐾 Pet Adoption Portal</h1>
      {pets.length === 0 ? (
        <p>Loading pets...</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <li key={pet._id}>
              <strong>{pet.name}</strong> - {pet.breed} ({pet.species})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

