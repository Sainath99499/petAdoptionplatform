import React from "react";

function PetCard({ pet, setPets }) {
  const adoptPet = async () => {
    await fetch(`http://localhost:5000/api/pets/${pet._id}/adopt`, {
      method: "PUT",
    });
    setPets((prev) =>
      prev.map((p) => (p._id === pet._id ? { ...p, adopted: true } : p))
    );
  };

  return (
    <div style={{ border: "1px solid gray", padding: "15px", borderRadius: "10px" }}>
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age}</p>
      <p>{pet.description}</p>
      <button onClick={adoptPet} disabled={pet.adopted}>
        {pet.adopted ? "✅ Adopted" : "Adopt Me"}
      </button>
    </div>
  );
}

export default PetCard;
