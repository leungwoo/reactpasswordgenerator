/* eslint-disable react/prop-types */
import {
  FormControlLabel, FormGroup, Grid, Switch,
} from '@mui/material';
import React from 'react';

const Checkbox = (props) => {
  const {
    hasUpperCase, hasLowerCase, hasSymbols, hasNumbers, setHasUpperCase, setHasLowerCase,
    setHasSymbols, setHasNumbers,
  } = props;
  return (
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
  );
};

export default Checkbox;
