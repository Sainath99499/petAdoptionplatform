import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <select>
          <option value="adopter">Adopter</option>
          <option value="shelter">Shelter</option>
        </select><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
