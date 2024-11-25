import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="logo">
        <h2>Admin Dashboard</h2>
      </div>
      <nav className="nav-links">
        <a href="/usermanagement" className="nav-item">
          Home
        </a>
        <a href="/rolemanagement" className="nav-item">
          Role Management
        </a>
        <a href="/" className="nav-item">
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Header;
