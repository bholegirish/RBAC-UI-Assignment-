import React, { useState } from 'react';
import './form.css';
import Header from './Header';

const AddUserForm = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!username || !email || !role) {
      setFormError('All fields are required!');
      return;
    }

    // Create a new user object
    const newUser = { username, email, role };

    // Pass the new user object to the addUser function
    addUser(newUser);

    // Clear the form fields
    setUsername('');
    setEmail('');
    setRole('User');
    setFormError('');
  };

  return (
    <>
   
    <div className="add-user-form">
      <h2>Add New User</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Add User</button>
      </form>
    </div>
    </>
    
  );
};

export default AddUserForm;
