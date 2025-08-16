import React, { useState } from "react";

function AddPetForm({ setPets }) {
  const [form, setForm] = useState({ name: "", type: "", age: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const newPet = await res.json();
    setPets((prev) => [...prev, newPet]);
    setForm({ name: "", type: "", age: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Pet</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="type" placeholder="Type" value={form.type} onChange={handleChange} />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPetForm;
