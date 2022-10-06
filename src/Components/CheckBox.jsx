import React from 'react';
import {
  Box, useMediaQuery,
} from '@mui/material';

function CheckBox() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box style={{
      marginTop: '5px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            type="checkbox"
            style={{ background: 'transparent', color: '#fff' }}
          />
        </div>
        <br />
      </Box>
    </Box>
  );
}

export default CheckBox;
