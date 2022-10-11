/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Strength = (props) => {
  const {
    passwordLength, hasUpperCase, hasLowerCase, hasSymbols, hasNumbers,
  } = props;
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (passwordLength < 10) {
      setColor('yellow');
      setMessage(' Weak!');
    } else if (passwordLength < 15) {
      setColor('orange');
      setMessage('Strong');
    } else if (passwordLength <= 20) {
      setColor('red');
      setMessage('Stronger');
    } else if (passwordLength > 20 && hasUpperCase && hasLowerCase && hasSymbols && hasNumbers) {
      setColor('green');
      setMessage('Vault Mode!');
    }
  }, [passwordLength, hasUpperCase, hasLowerCase, hasSymbols, hasNumbers]);

  return (
    <Grid
      container
      item
      sx={{
        width: '180px',
        height: '100%',
        padding: '10px',
        borderRadius: '10px',
        background: 'black',
        color: '#A4FFAF',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Grid item>
        <Typography color="#1976d2">
          Strength:
        </Typography>
      </Grid>
      <Grid>
        <Typography sx={{ color: { color } }}>
          { message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Strength;
