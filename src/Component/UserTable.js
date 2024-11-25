import React, { useState } from 'react';
import './UserTable.css';

const UserTable = ({ users }) => {
  const [userStates, setUserStates] = useState(
    users.map((user) => ({ ...user, active: true }))
  );

  const [editingUser, setEditingUser] = useState(null); // Track the user being edited
  const [editForm, setEditForm] = useState({ username: '', email: '', role: '' });

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditForm({ username: user.username, email: user.email, role: user.role });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setUserStates((prevStates) =>
      prevStates.map((user) =>
        user.id === editingUser
          ? { ...user, ...editForm } // Update the edited user
          : user
      )
    );
    setEditingUser(null); // Close the form
  };

  const handleCancelEdit = () => {
    setEditingUser(null); // Cancel editing
  };

  return (
    <div className="container my-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Active/Inactive</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userStates && userStates.length > 0 ? (
              userStates.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {editingUser === user.id ? (
                      <input
                        type="text"
                        name="username"
                        value={editForm.username}
                        onChange={handleInputChange}
                      />
                    ) : (
                      user.username
                    )}
                  </td>
                  <td>
                    {editingUser === user.id ? (
                      <input
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {editingUser === user.id ? (
                      <select
                        name="role"
                        value={editForm.role}
                        onChange={handleInputChange}
                      >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                      </select>
                    ) : (
                      user.role
                    )}
                  </td>
                  <td>
                    <button
                      className={`btn btn-sm ${
                        user.active ? 'btn-success' : 'btn-secondary'
                      }`}
                      onClick={() =>
                        setUserStates((prevStates) =>
                          prevStates.map((u) =>
                            u.id === user.id ? { ...u, active: !u.active } : u
                          )
                        )
                      }
                    >
                      {user.active ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td>
                    {editingUser === user.id ? (
                      <>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={handleEditSubmit}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
