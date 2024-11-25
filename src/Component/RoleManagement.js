import React, { useState } from "react";
import './RoleManagement.css'
import Header from "./Header";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Moderator", permissions: ["Read", "Write"] },
  ]);
  const [newRole, setNewRole] = useState("");
  const [newPermissions, setNewPermissions] = useState([]);
  const [editingRole, setEditingRole] = useState(null);
  const [rolePermissions, setRolePermissions] = useState([]);

  const handleRoleChange = (e) => {
    setNewRole(e.target.value);
  };

  const handlePermissionsChange = (e) => {
    const permission = e.target.value;
    setNewPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  const addRole = () => {
    if (!newRole) {
      alert("Role name is required");
      return;
    }
    const newRoleObj = { id: roles.length + 1, name: newRole, permissions: newPermissions };
    setRoles([...roles, newRoleObj]);
    setNewRole("");
    setNewPermissions([]);
  };

  const editRole = (role) => {
    setEditingRole(role.id);
    setRolePermissions(role.permissions);
  };

  const saveRole = () => {
    setRoles(
      roles.map((role) =>
        role.id === editingRole
          ? { ...role, permissions: rolePermissions }
          : role
      )
    );
    setEditingRole(null);
    setRolePermissions([]);
  };

  const deleteRole = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <>
    <Header/>
    <div className="role-management-container">
      <h1>Role Management</h1>

      {/* Add New Role */}
      <div className="add-role">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole}
          onChange={handleRoleChange}
        />
        <div>
          <label>Permissions:</label>
          <label>
            <input
              type="checkbox"
              value="Read"
              checked={newPermissions.includes("Read")}
              onChange={handlePermissionsChange}
            />
            Read
          </label>
          <label>
            <input
              type="checkbox"
              value="Write"
              checked={newPermissions.includes("Write")}
              onChange={handlePermissionsChange}
            />
            Write
          </label>
          <label>
            <input
              type="checkbox"
              value="Delete"
              checked={newPermissions.includes("Delete")}
              onChange={handlePermissionsChange}
            />
            Delete
          </label>
        </div>
        <button onClick={addRole}>Create Role</button>
      </div>

      {/* Role List */}
      <div className="role-list">
        <h2>Existing Roles</h2>
        <table>
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>{role.permissions.join(", ")}</td>
                <td>
                  <button onClick={() => editRole(role)}>Edit</button>
                  <button onClick={() => deleteRole(role.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Role */}
      {editingRole && (
        <div className="edit-role">
          <h2>Edit Role</h2>
          <div>
            <label>Permissions:</label>
            <label>
              <input
                type="checkbox"
                value="Read"
                checked={rolePermissions.includes("Read")}
                onChange={(e) => {
                  const permission = e.target.value;
                  setRolePermissions((prevPermissions) =>
                    prevPermissions.includes(permission)
                      ? prevPermissions.filter((p) => p !== permission)
                      : [...prevPermissions, permission]
                  );
                }}
              />
              Read
            </label>
            <label>
              <input
                type="checkbox"
                value="Write"
                checked={rolePermissions.includes("Write")}
                onChange={(e) => {
                  const permission = e.target.value;
                  setRolePermissions((prevPermissions) =>
                    prevPermissions.includes(permission)
                      ? prevPermissions.filter((p) => p !== permission)
                      : [...prevPermissions, permission]
                  );
                }}
              />
              Write
            </label>
            <label>
              <input
                type="checkbox"
                value="Delete"
                checked={rolePermissions.includes("Delete")}
                onChange={(e) => {
                  const permission = e.target.value;
                  setRolePermissions((prevPermissions) =>
                    prevPermissions.includes(permission)
                      ? prevPermissions.filter((p) => p !== permission)
                      : [...prevPermissions, permission]
                  );
                }}
              />
              Delete
            </label>
          </div>
          <button onClick={saveRole}>Save</button>
        </div>
      )}
    </div>
    </>
  );
};

export default RoleManagement;
