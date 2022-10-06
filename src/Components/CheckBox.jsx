/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { pink } from '@mui/material/colors';
import {
  Box, Checkbox, useMediaQuery,
} from '@mui/material';

function CheckBox({ name, value, onChange }) {
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
        color: '#fff',
        borderRadius: '10px',
        justifyContent: 'center',
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>{name}</h3>
          <Checkbox
            type="checkbox"
            value={value}
            onChange={onChange}
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
        </div>
        <br />
      </Box>
    </Box>
  );
}

export default CheckBox;
