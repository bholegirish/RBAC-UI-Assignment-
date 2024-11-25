import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import Header from './Header';

const UserManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    // Retrieve users from local storage on initial load
    const storedUsers = localStorage.getItem('users');
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { id: 1, username: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
          { id: 2, username: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
        ];
  });

  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    // Save users to local storage whenever the users state changes
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setShowAddUserForm(false);
  };

  const handleAddUser = () => {
    setShowAddUserForm(true);
  };

  return (
    <>
      <Header />
      <div>
        <h1>User Management</h1>

        {/* Only show the "Add User" button if the form is not displayed */}
        {!showAddUserForm && (
          <div className="mb-3">
            <button className="btn btn-primary" onClick={handleAddUser}>
              Add User
            </button>
          </div>
        )}

        {/* Conditionally render the AddUserForm or UserTable */}
        {showAddUserForm ? (
          <AddUserForm addUser={addUser} />
        ) : (
          <UserTable users={users} />
        )}
      </div>
    </>
  );
};

export default UserManagement;
