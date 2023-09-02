import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './RegisterPage.css';

const RegisterPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [details, setDetails] = useState({ name: '', email: '', password: '', role: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleRegister = () => {
    // Simulate a successful registration
    setIsAuthenticated(true);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Create Your Account</h2>
        <p>Join us and be part of the next-generation workspace!</p>
        
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={details.name} 
          onChange={handleInputChange} 
        />
        
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={details.email} 
          onChange={handleInputChange} 
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={details.password} 
          onChange={handleInputChange} 
        />

        <select name="role" value={details.role} onChange={handleInputChange}>
          <option value="" disabled>Select your role</option>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
        </select>

        <button className="register-button" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default RegisterPage;


