import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/password.png';

function Head() {
  return (
    <AppBar style={{ background: 'transparent', padding: '10px' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
        <img src={logo} alt="logo" width="100px" style={{ borderRadius: '40px' }} />
        <span style={{ color: '#A4FFAF' }}>
          Passwords for everyone
        </span>
      </Toolbar>
    </AppBar>
  );
}

export default Head;
