import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/cloud.png';

const Head = () => (
  <AppBar style={{
    background: 'transparent', padding: '10px', backdropFilter: 'blur(10px)', boxShadow: ('0px 0px 20px 10px white'),
  }}
  >
    <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={logo} alt="logo" width="100px" style={{ borderRadius: '40px' }} />
      <span style={{ color: '#fff', marginLeft: '5px', fontSize: 'large' }}>
        Cloud Passwords
      </span>
    </Toolbar>
  </AppBar>
);

export default Head;
