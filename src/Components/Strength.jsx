/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Strength = (props) => {
  const { passwordLength } = props;
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (passwordLength < 10) {
      setMessage(' Weak!');
    } else if (passwordLength < 15) {
      setMessage('Strong');
    } else if (passwordLength <= 20) {
      setMessage('Stronger');
    } else if (passwordLength <= 26) {
      setMessage('Vault Mode');
    }
  }, [passwordLength]);

  return (
    <Grid
      container
      item
      sx={{
        width: '180px',
        height: '100%',
        padding: '10px',
        borderRadius: '10px',
        background: 'grey',
        color: '#A4FFAF',
      }}
    >
      <Grid>
        <Typography>
          Strength:
        </Typography>
      </Grid>
      <Typography>
        { message}
      </Typography>
    </Grid>
  );
};

export default Strength;
