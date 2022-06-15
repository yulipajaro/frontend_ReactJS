import React from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const HeaderSelect = ({from, to, date}) => {

  return (
    <div className="options">
      <Grid container>
        <Grid container item spacing={2}>
          <Grid item xs={3}>
            <TextField
              disabled
              id="filled-disabled"
              label="From"
              defaultValue={from}
              variant="filled"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled
              id="filled-disabled"
              label="To"
              defaultValue={to}
              variant="filled"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled
              id="filled-disabled"
              label="Date"
              defaultValue={date}
              variant="filled"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Refine
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value="Filter/Sort"
                label="Refine"
              >
                <MenuItem value={'Filter/Sort'}>Filter/Sort</MenuItem>
                <MenuItem value={'Thirty'}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderSelect;
