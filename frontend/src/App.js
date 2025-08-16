import React, { useState, useEffect } from "react";
import PetList from "./components/PetList";
import AddPetForm from "./components/AddPetForm";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  return (
    <div className="container">
      <h1>🐾 Pet Adoption Platform</h1>
      <AddPetForm setPets={setPets} />
      <PetList pets={pets} setPets={setPets} />
    </div>
  );
}

export default App;
