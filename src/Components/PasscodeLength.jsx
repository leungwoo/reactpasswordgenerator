/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Input, useMediaQuery,
} from '@mui/material';
import { pink } from '@mui/material/colors';

function PasscodeLength({ name, value, onChange }) {
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
        display: 'flex',
        width: isMobile ? '350px' : '600px',
        padding: '10px',
        alignItems: 'center',
        background: '#24232C',
        color: '#fff',
        borderRadius: '10px',
        justifyContent: 'space-between',
      }}
      >
        <Box style={{ display: 'flex' }}>
          <h3>{name}</h3>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Input
            type="number"
            min="4"
            max="20"
            value={value}
            onChange={onChange}
            sx={{
              color: pink[800], fontSize: 'large', width: '80px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default PasscodeLength;
