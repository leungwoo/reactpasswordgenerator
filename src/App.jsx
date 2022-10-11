/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import {
  Box, Button, Grid, IconButton, Slider, Typography,
  useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from './Components/Head';
import Strength from './Components/Strength';
import {
  numbers, symbols, upperCaseLetters, lowerCaseLetters,
} from './Components/Character';
import { CopySuccess, CopyFailed } from './Components/Message';
import copy from './assets/Copy.png';
import bgImage from './assets/weblock.jpeg';
import Checkbox from './Components/Checkbox';

const App = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

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
        autoClose: 5000,
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
      notify('Password is generated Successfully, and will disappear in 5 seconds', false);
      setTimeout(() => {
        setPassword('');
      }, 6000);
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

  return (

    <div>
      <Head />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundImage: `url(${bgImage})`,
          height: '100vh',
          paddingLeft: '20px',
          paddingRight: '30px',
          backgroundSize: isMobile ? '' : 'cover',
          backgroundRepeat: isMobile ? 'repeat' : 'no-repeat',
        }}
      >
        <Grid
          container
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={4}
          sx={{ justifyContent: 'center', marginTop: '10vh', marginBottom: '10vh' }}
        >
          <Grid
            item
            container
            sx={{
              background: 'white',
              justifyContent: 'space-between',
              borderRadius: '10px',
              padding: '1px',
              alignItems: 'center',
              boxShadow: ('0px 0px 7px 2px white'),
              marginTop: '100px',
            }}
          >
            <Grid item>
              <Typography
                variant="h6"
                sx={{ wordWrap: 'break-word' }}
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
              marginTop: '20px',
              alignItems: 'center',
              paddingTop: '20px',
              paddingBottom: '30px',
              boxShadow: ('0px 0px 7px 2px white'),
            }}
          >
            <Grid item container sx={{ padding: '5px' }}>
              <Grid item container className="slider length details" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Typography variant="h6">
                  Password Length
                </Typography>
                <Typography variant="h5">
                  {passwordLength}
                </Typography>
              </Grid>
              <Grid item className="slider" xs={11}>
                <Slider
                  size="large"
                  defaultValue={passwordLength}
                  onChange={(e) => setPasswordLength(e.target.value)}
                  aria-label="length"
                  valueLabelDisplay="auto"
                  min={8}
                  max={26}
                />
              </Grid>
            </Grid>
            <Checkbox
              hasLowerCase={hasLowerCase}
              hasUpperCase={hasUpperCase}
              hasSymbols={hasSymbols}
              hasNumbers={hasNumbers}
              setHasLowerCase={setHasLowerCase}
              setHasUpperCase={setHasUpperCase}
              setHasNumbers={setHasNumbers}
              setHasSymbols={setHasSymbols}
            />
            <Grid item className="strength" sx={{ display: 'flex' }}>
              <Strength
                passwordLength={passwordLength}
                hasUpperCase={hasUpperCase}
                hasLowerCase={hasLowerCase}
                hasSymbols={hasSymbols}
                hasNumbers={hasNumbers}
              />
            </Grid>
            <Grid item sx={{ paddingTop: '10px' }}>
              <Button
                onClick={generatePassword}
                className="button"
                sx={{
                  border: 'black 2px solid',
                  fontWeight: 'bold',
                  '&:hover': { background: 'black' },
                }}

              >
                Generate password
                {' '}
                <ArrowForwardIcon />
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
