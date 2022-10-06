/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, createContext } from 'react';
import { Box, Button, Typography } from '@mui/material';

import {
  CheckBox, Head, PasswordCode, PasscodeLength,
} from './Components';

export const AppContext = createContext();

const App = () => {
  const [passcode, setPasscode] = useState({
    length: 10,
    uppercase: false,
    lowercase: false,
    symbols: false,
    numbers: false,
  });
  const [handleText, setHandleText] = useState('');

  // functions to handle the changes of checkbox
  const handleChangeUpperCase = () => {
    // console.log(passcode.uppercase);
    setPasscode({ ...passcode, uppercase: !passcode.uppercase });
  };
  const handleChangeLowerCase = () => {
    setPasscode({ ...passcode, lowercase: !passcode.lowercase });
  };
  const handleChangeSymbols = () => {
    setPasscode({ ...passcode, symbols: !passcode.symbols });
  };
  const handleChangeNumbers = () => {
    setPasscode({ ...passcode, numbers: !passcode.numbers });
  };

  // handle change in slider password length
  const setPasscodeLength = (value) => {
    console.log('here', value);
    setPasscode({ ...passcode, length: value });
  };

  // generate password function
  const generatePassword = () => {
    // numbers
    const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    console.log(numbersArray);
    // symbols
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    console.log(symbolsArray);
    // uppercase letters
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const lowerCaseLetter = alpha.map((x) => String.fromCharCode(x));
    console.log(lowerCaseLetter);
    // lowercase letters
    const upperCaseLetter = alpha.map((x) => String.fromCharCode(x).toUpperCase());
    console.log(upperCaseLetter);

    // desconstructing
    const {
      length, uppercase, lowercase, symbols, numbers,
    } = setPasscode;
    // function to generate random password
    const generateFullPassword = (length, uppercase, lowercase, symbols, numbers) => {
      const charactersForPassword = [
        ...(uppercase ? upperCaseLetter : []),
        ...(lowercase ? lowerCaseLetter : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffledArray = (array) => array.sort(() => Math.random() - 0.5);
      const shuffledArrayCharacters = shuffledArray(charactersForPassword).slice(0, length);
      setHandleText(shuffledArrayCharacters.join(''));
      console.log(shuffledArrayCharacters);
      return shuffledArrayCharacters;
    };
    generateFullPassword(length, uppercase, lowercase, symbols, numbers);
  };

  return (

    <div>
      <AppContext.Provider value={{ handleText, setHandleText }}>
        <Head />
        <Box
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(#4b6cb7, #182848)',
            height: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '40px',
          }}
        >
          <Box style={{ paddingTop: '150px' }}>
            <Box style={{ display: 'flex', justifyContent: 'center', margin: 'auto ' }}>
              <Typography variant="h5" style={{ color: ' #817D92', padding: '10px' }}>
                NB:Update your password every 60days for maximum security.
              </Typography>
            </Box>
            <PasswordCode />
            <PasscodeLength name="Character Length" value={passcode.length} onChange={(e) => (setPasscodeLength(e.target.value))} />
            <CheckBox name="Include uppercase letters" value={passcode.uppercase} onChange={handleChangeUpperCase} />
            <CheckBox name="Include lowercase letters" value={passcode.lowercase} onChange={handleChangeLowerCase} />
            <CheckBox name="Include symbols" value={passcode.symbols} onChange={handleChangeSymbols} />
            <CheckBox name="Include numbers" value={passcode.numbers} onChange={handleChangeNumbers} />
            <Button
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                margin: 'auto',
                background: '#02adb5',
                color: 'white',
              }}
              onClick={generatePassword}
            >
              Generate Password
            </Button>
          </Box>
        </Box>
      </AppContext.Provider>
    </div>

  );
};

export default App;

// import { useState } from 'react';
// import './App.css';

// import Checkbox from './components/Checkbox';

// function App() {
//   const [passwordGen, setPasswordGen] = useState({
//     length: 5,
//     uppercase: false,
//     lowercase: false,
//     numbers: false,
//     symbols: false,
//   });
//   const [handelText, setHandelText] = useState('');
//   const [copied, setCopied] = useState(false);

//   const handleChangeUppercase = () => {
//     setPasswordGen({
//       ...passwordGen,
//       uppercase: !passwordGen.uppercase,
//     });
//   };

//   const handleChangeLowercase = () => {
//     setPasswordGen({
//       ...passwordGen,
//       lowercase: !passwordGen.lowercase,
//     });
//   };

//   const handleChangeNumbers = () => {
//     setPasswordGen({
//       ...passwordGen,
//       numbers: !passwordGen.numbers,
//     });
//   };

//   const handleChangeSymbols = () => {
//     setPasswordGen({
//       ...passwordGen,
//       symbols: !passwordGen.symbols,
//     });
//   };

//   const setPasswordLength = (val) => {
//     setPasswordGen({
//       ...passwordGen,
//       length: val,
//     });
//   };

//   function generatePassword() {
//     const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//     const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//     const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
//     const lowerCaseLetters = characterCodes.map((code) =>
//       String.fromCharCode(code)
//     );
//     const upperCaseLetters = lowerCaseLetters.map((letter) =>
//       letter.toUpperCase()
//     );

//     const { length, uppercase, lowercase, numbers, symbols } = passwordGen;

//     const generateTheWord = (
//       length,
//       uppercase,
//       lowercase,
//       numbers,
//       symbols
//     ) => {
//       const availableCharacters = [
//         ...(lowercase ? lowerCaseLetters : []),
//         ...(uppercase ? upperCaseLetters : []),
//         ...(numbers ? numbersArray : []),
//         ...(symbols ? symbolsArray : []),
//       ];
//       const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
//       const characters = shuffleArray(availableCharacters).slice(0, length);
//       setHandelText(characters.join(''));
//       return characters;
//     };

//     generateTheWord(length, uppercase, lowercase, numbers, symbols);
//   }

//   return (
//     <div className="wrapper">
//       <div className="container wrapper-box">
//         <h2>Password Generator</h2>
//         <div className="password-box">
//           <input
//             type="text"
//             value={handelText}
//             placeholder=""
//             autoComplete="off"
//             onChange={(e) => setHandelText(e.target.value)}
//           />
//           <button
//             className="copy-button"
//             onClick={() => {
//               if (handelText.length > 0) {
//                 navigator.clipboard.writeText(handelText);
//                 setCopied(true);
//                 setInterval(() => {
//                   setCopied(false);
//                 }, 2000);
//               }
//             }}
//           >
//             {copied ? 'Copied!' : 'Copy text'}
//           </button>
//         </div>
//         <br />
//         <div className="word-crieteria__box">
//           <div>
//             <label>Password length</label>
//           </div>
//           <div>
//             <input
//               type="number"
//               min="4"
//               max="20"
//               value={passwordGen.length}
//               onChange={(e) => setPasswordLength(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="word-crieteria__box">
//           <div>
//             <label>Include uppercase letters</label>
//           </div>
//           <div>
//             <Checkbox
//               value={passwordGen.uppercase}
//               onChange={handleChangeUppercase}
//             />
//           </div>
//         </div>
//         <div className="word-crieteria__box">
//           <div>
//             <label>Include lowercase letters</label>
//           </div>
//           <div>
//             <Checkbox
//               value={passwordGen.lowercase}
//               onChange={handleChangeLowercase}
//             />
//           </div>
//         </div>
//         <div className="word-crieteria__box">
//           <div>
//             <label>Include numbers</label>
//           </div>
//           <div>
//             <Checkbox
//               value={passwordGen.numbers}
//               onChange={handleChangeNumbers}
//             />
//           </div>
//         </div>
//         <div className="word-crieteria__box">
//           <div>
//             <label>Include symbols</label>
//           </div>
//           <div>
//             <Checkbox
//               value={passwordGen.symbols}
//               onChange={handleChangeSymbols}
//             />
//           </div>
//         </div>
//         <div>
//           <button className="generate-button" onClick={generatePassword}>
//             Generate password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
