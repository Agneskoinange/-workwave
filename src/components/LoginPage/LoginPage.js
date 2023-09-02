import React from 'react';
import { Button, TextField } from '@mui/material';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to WorkWave</h2>
        <TextField label="Email" variant="outlined" fullWidth margin="normal"/>
        <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal"/>
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
