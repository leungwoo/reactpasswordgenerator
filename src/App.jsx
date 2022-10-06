/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  Box, Button, Typography,
} from '@mui/material';

import CheckBox from './Components/CheckBox';
import Head from './Components/Head';
import Passwordcode from './Components/Passwordcode';

function App() {
  return (
    <div>
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
          <Box style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto ',
          }}
          >
            <Typography
              variant="h5"
              style={{ color: ' #817D92', padding: '10px' }}
            >
              NB:Update your password every 60days for maximum security.
            </Typography>
          </Box>
          <Passwordcode />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <Button style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            background: '#A4FFAF',
            color: '#817D92',
          }}
          >
            Generate Password
          </Button>
        </Box>
      </Box>
    </div>
  );
}

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
