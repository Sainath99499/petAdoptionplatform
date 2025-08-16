import React from 'react';

const AdoptForm = () => {
  return (
    <div className="page">
      <h2>Adoption Form</h2>
      <form className="form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Pet Name You Want to Adopt" required />
        <textarea placeholder="Why do you want to adopt this pet?" required></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default AdoptForm;

