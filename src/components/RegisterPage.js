import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const RegisterPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleRegister = () => {
    // Simulate a successful registration
    setIsAuthenticated(true);
  };

  return (
    <div>
      <h2>Register Page</h2>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
