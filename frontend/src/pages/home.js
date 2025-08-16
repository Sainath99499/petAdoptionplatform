import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/pets`)
      .then(res => setPets(res.data))
      .catch(err => console.error('Error fetching pets:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Available Pets for Adoption</h2>
      {pets.length === 0 ? (
        <p>No pets available</p>
      ) : (
        <ul>
          {pets.map(pet => (
            <li key={pet._id}>
              <strong>{pet.name}</strong> - {pet.breed} ({pet.species})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
