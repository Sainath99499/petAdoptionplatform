import React from "react";
import PetCard from "./PetCard";

function PetList({ pets, setPets }) {
  return (
    <div>
      <h2>Available Pets</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} setPets={setPets} />
        ))}
      </div>
    </div>
  );
}

export default PetList;
