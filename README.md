# Role and User Management UI

This project is a **UI-only implementation** of a Role and User Management system. The interface is designed to provide functionalities for administrators to manage users, roles, and their associated permissions.

---

## Features

### User Management
- **View Users**: Displays a list of users in a tabular format, including fields for:
  - ID
  - Name
  - Email
  - Role
  - Active/Inactive status (with a toggle button)
- **Actions on Users**:
  - Edit: Modify user details such as name, email, or role.
  - Delete: Remove a user from the list.

### Role Management
- **View Roles**: Displays a list of all roles with their associated permissions.
- **Create/Edit Roles**:
  - Create new roles (e.g., "Admin", "Moderator") with specific permissions.
  - Edit existing roles, including updating permissions dynamically.
- **Delete Roles**: Remove a role, ensuring the interface warns about its potential association with users.

### Permissions Management
- **Dynamic Permissions Assignment**:
  - Permissions (e.g., Read, Write, Delete) are displayed using user-friendly checkboxes or toggles.
  - Admins can dynamically assign or modify permissions for roles.

---

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **CSS**: Custom styling to create a responsive and user-friendly design.

---

## How to Run the Project

### Prerequisites
- Install **Node.js** and **npm** on your system.

### Steps to Run

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd role-user-management-ui

2. **Install Dependencies**
     npm install
3. **Start the Application**
      npm start
This will start the React application and serve it at http://localhost:3000



