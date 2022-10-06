import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/cloud.png';

function Head() {
  return (
    <AppBar style={{ background: 'transparent', padding: '10px', backdropFilter: 'blur(40px)' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
        <img src={logo} alt="logo" width="100px" style={{ borderRadius: '40px' }} />
        <span style={{ color: '#fff' }}>
          Passwords for everyone
        </span>
      </Toolbar>
    </AppBar>
  );
}

export default Head;
