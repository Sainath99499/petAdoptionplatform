// src/pages/AdoptForm.js
import React, { useState } from 'react';

const AdoptForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    petName: '',
    reason: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted successfully!\nThank you, ${form.fullName}.`);
    setForm({ fullName: '', email: '', petName: '', reason: '' });
  };

  return (
    <div className="page">
      <h2>Adoption Form 🐾</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          name="petName"
          value={form.petName}
          onChange={handleChange}
          placeholder="Pet Name You Want to Adopt"
          required
        />
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Why do you want to adopt this pet?"
          required
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default AdoptForm;

