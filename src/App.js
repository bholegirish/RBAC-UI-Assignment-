import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Login from './Component/Login';
import AddUserForm from './Component/AddUserForm';
import UserManagement from './Component/UserManagement';
import RoleManagement from './Component/RoleManagement';

function App() {
  return (
    <Router>
    
      <Routes> {/* Wrap all Route components */}
        <Route path="/" element={<Login />} /> {/* Login page route */}
        <Route path="/usermanagement" element={<UserManagement />} /> {/* UserManagement route */}
        <Route path="/userform" element={<AddUserForm />} /> {/* Add User form route */}
        <Route path='/Rolemanagement' element={<RoleManagement/>}/>
      </Routes>
    </Router>
  );
}

export default App;
