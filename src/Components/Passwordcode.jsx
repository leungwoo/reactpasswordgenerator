/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import {
  Box, IconButton, Input, useMediaQuery,
} from '@mui/material';
import React, { useState, useContext } from 'react';
import { useTheme } from '@mui/material/styles';

import { AppContext } from '../App';
import copy from '../assets/Copy.png';

const PasswordCode = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { handleText, setHandleText } = useContext(AppContext);
  console.log('here', handleText);
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
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
          <Input
            fullWidth
            placeholder="Password will generate here"
            id="fullWidth"
            type="text"
            value={handleText}
            onChange={(e) => setHandleText(e.target.value)}
            sx={{ backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b' }}
          />

          <IconButton onClick={() => {
            if (handleText.length > 0) {
              navigator.clipboard.writeText(handleText);
              setCopied(true);
              setInterval(() => { setCopied(false); }, 2000);
            }
          }}
          >
            {copied ? (
              <img
                src={copy}
                alt="copyimage"
              />
            ) : null}

          </IconButton>

        </div>
        <br />
      </Box>
    </Box>
  );
};

export default PasswordCode;
