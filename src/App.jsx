/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import {
  Box, Button, FormControlLabel, FormGroup, Grid, IconButton, Slider, Switch, Typography,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from './Components/Head';
import Strength from './Components/Strength';
import {
  numbers, symbols, upperCaseLetters, lowerCaseLetters,
} from './Components/Character';
import { CopySuccess, CopyFailed } from './Components/Message';
import copy from './assets/Copy.png';

const App = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);

  const createPassword = (characterList) => {
    let passcode = '';
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      passcode += characterList.charAt(characterIndex);
      console.log(passcode);
    }
    return passcode;
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        postion: 'top-center',
        autoClose: 2500,
        hideProgressBar: 'false',
        closeOnClick: 'true',
        pauseOnHover: 'true',
        draggable: 'true',
        progress: undefined,
      });
    } else {
      toast(message, {
        postion: 'top-center',
        autoClose: 2500,
        hideProgressBar: 'false',
        closeOnClick: 'true',
        pauseOnHover: 'true',
        draggable: 'true',
        progress: undefined,
      });
    }
  };

  const generatePassword = () => {
    if (!hasUpperCase && !hasLowerCase && !hasSymbols && !hasNumbers) {
      notify('To generate password you must have atleast one box checked', true);
    } else {
      let characterList = '';
      if (hasUpperCase) { characterList += upperCaseLetters; }
      if (hasLowerCase) { characterList += lowerCaseLetters; }
      if (hasSymbols) { characterList += symbols; }
      if (hasNumbers) { characterList += numbers; }
      setPassword(createPassword(characterList));
      notify('Password is generated Successfully', false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const handleCopyPassword = () => {
    if (password === '') {
      notify(CopyFailed, true);
    } else {
      copyToClipboard(password);
      notify(CopySuccess, false);
    }
  };

  useEffect(() => {

  }, []);

  return (

    <div>
      <Head />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: 'linear-gradient(#4b6cb7, #182848)',
          height: '90vh',
          paddingLeft: '20px',
          paddingRight: '30px',
          paddingBottom: '40px',
          marginTop: '50px',
        }}
      >
        <Grid
          container
          xs={12}
          sm={12}
          md={5}
          lg={4}
          xl={4}
          sx={{ justifyContent: 'center', marginTop: '10vh', marginBottom: '10vh' }}
        >
          <Typography variant="h6" style={{ color: 'grey' }}>
            Recommended:Change passwords every 90 days.
          </Typography>
          <Grid
            item
            container
            sx={{
              background: 'white',
              justifyContent: 'space-around',
              borderRadius: '10px',
              padding: '1px',
              alignItems: 'center',
            }}
          >
            <Grid item>
              <Typography
                variant="h6"
                sx={{ wordWrap: 'break-word', width: '100%' }}
              >
                {password}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleCopyPassword}>
                <img src={copy} alt="copyimg" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            sx={{
              display: 'flex',
              background: 'white',
              justifyContent: 'space-between',
              borderRadius: '10px',
              padding: '5px',
              marginTop: '10px',
              alignItems: 'center',
            }}
          >
            <Grid item container>
              <Grid item className="slider length details" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">
                  Password Lenght:
                </Typography>
                <Typography variant="h5">
                  {passwordLength}
                </Typography>
              </Grid>
              <Grid item className="slider" xs={12}>
                <Slider
                  sx={{ width: '90%' }}
                  defaultValue={passwordLength}
                  onChange={(e) => setPasswordLength(e.target.value)}
                  aria-label="length"
                  valueLabelDisplay="auto"
                  min={8}
                  max={26}
                />
              </Grid>
            </Grid>
            <Grid item className="checkboxform">
              <FormGroup>
                <FormControlLabel
                  control={(
                    <Switch
                      checked={hasUpperCase}
                      onChange={(e) => setHasUpperCase(e.target.checked)}
                      name="hasUpperCase"
                    />
)}
                  label="Add Uppercase Letters"
                />
                <FormControlLabel
                  control={(
                    <Switch
                      checked={hasLowerCase}
                      onChange={(e) => setHasLowerCase(e.target.checked)}
                      name="hasLowerCase"
                    />
)}
                  label="Add Lowercase Letters"
                />
                <FormControlLabel
                  control={(
                    <Switch
                      checked={hasSymbols}
                      onChange={(e) => setHasSymbols(e.target.checked)}
                      name="hasSymbols"
                    />
)}
                  label="Add Symbols"
                />
                <FormControlLabel
                  control={(
                    <Switch
                      checked={hasNumbers}
                      onChange={(e) => setHasNumbers(e.target.checked)}
                      name="hasNumbers"
                    />
)}
                  label="Add Numbers"
                />
              </FormGroup>
            </Grid>
            <Grid item className="strength" sx={{ display: 'flex' }}>
              <Strength passwordLength={passwordLength} />
            </Grid>
            <Grid item>
              <Button
                onClick={generatePassword}
                className="button"
                sx={{
                  display: 'flex', background: '#A4FFAF', color: 'black', borderRadius: '5px',
                }}
              >
                Generate password
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <ToastContainer />
      </Box>
    </div>
  );
};
export default App;
