import {
  Box, IconButton, TextField, useMediaQuery,
} from '@mui/material';
import React from 'react';

import copy from '../assets/Copy.png';

function Passwordcode() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5px',
      marginBottom: '10px',
    }}
    >
      <Box style={{
        width: isMobile ? '350px' : '600px',
        padding: '10px',
        alignItems: 'center',
        background: '#24232C',
        borderRadius: '10px',
        justifyContent: 'center',
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <TextField
            fullWidth
            label="password"
            id="fullWidth"
            type="text"
            style={{ color: '#fff' }}
          />
          <IconButton>
            <img
              src={copy}
              alt="copyimage"
            />
          </IconButton>
        </div>
        <br />
      </Box>
    </Box>
  );
}

export default Passwordcode;
