// src/components/LoginPage.js

import React from 'react';
import { Button, TextField } from '@mui/material';

const LoginPage = () => {
  return (
    <div>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}

export default LoginPage;
