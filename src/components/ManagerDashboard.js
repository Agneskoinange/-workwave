import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const ManagerDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <div>Please register or login to access the Manager Dashboard.</div>;
  }

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <p>Welcome to the manager dashboard. Here you can manage employees and other tasks.</p>
    </div>
  );
}

export default ManagerDashboard;
