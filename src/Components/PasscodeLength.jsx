import React from 'react';
import {
  Box, Slider, Typography, useMediaQuery,
} from '@mui/material';

function PasscodeLength() {
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
        color: '#fff',
        borderRadius: '10px',
        justifyContent: 'center',
      }}
      >
        <Box sx={{ width: isMobile ? 200 : 350 }}>
          <Typography>Character length:</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={10}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={30}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default PasscodeLength;
