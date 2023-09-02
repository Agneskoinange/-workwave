import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const EmployeeDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <div>Please register or login to access the Employee Dashboard.</div>;
  }

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <p>Welcome to the employee dashboard. Here you can manage your tasks and view reports.</p>
    </div>
  );
}

export default EmployeeDashboard;
