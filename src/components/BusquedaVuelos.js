import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import "@fontsource/raleway/400.css";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import "../styles/styles.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CatalogoService from "../services/CatalogoService"

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const colortheme = createTheme({
  palette: {
    primary: { main: "#963A78", contrastText: "#fff" },
    secondary: { main: "#03a9f4", contrastText: "#fff" },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#f4f4f4"),
    backgroundColor: '#CB3234',
    '&:hover': {
      backgroundColor: '#CB3234',
    },
  }));

const BusquedaVuelos = () => {
  const [departure, setDeparture] = useState("Departure airport");
  const [arrival, setArrival] = useState("Arrival airport");
  const [date, setDate] = useState("");

  let navigate = useNavigate ();

  const handleSubmit = (e) => {

    window.sessionStorage.setItem('departure', departure)
    window.sessionStorage.setItem('arrival', arrival)
    window.sessionStorage.setItem('date', date)

    CatalogoService.getCatalog(departure, arrival, date).then((res)=>{
      console.log(res.data);
      window.sessionStorage.setItem('catalogo',JSON.stringify(res.data))
      navigate("/select-flight");
    }).catch((error)=> 
    navigate("/select-flight")
    );
  }

  return (
    <div className="content">
      <ThemeProvider theme={colortheme}>
        <Typography color="primary" variant="h3">
          Where next?
        </Typography>
      </ThemeProvider>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 4 }}>
      
      <Paper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <img className="icon" alt="avion" src="avionUp.png"></img>
            </Grid>
            <Grid item>
            <FormControl >
            <InputLabel id="demo-simple-select-standard-label">Departure airport</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
                name = "departure"
                value={departure}
                label="Departure"
                onChange={e => setDeparture(e.target.value) }
                defaultValue={'London Airport'}
              >
                <MenuItem value={'London Airport'}>London Airport</MenuItem>
                <MenuItem value={'Miami Airport'}>Miami Airport</MenuItem>
                <MenuItem value={'Amsterdam Airport'}>Amsterdam Airport</MenuItem>
              </Select>
              </FormControl>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <img className="icon" alt="avion" src="avionDown.png"></img>
            </Grid>
            <Grid item>
            <FormControl >
            <InputLabel id="demo-simple-select-standard-label">Arrival airport</InputLabel>
              <Select
                 labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
                value={arrival}
                label="Arrival"
                onChange={e => setArrival(e.target.value)}
              >
                <MenuItem value={'Amsterdam Airport'}>Amsterdam Airport</MenuItem>
                <MenuItem value={'Miami Airport'}>Miami Airport</MenuItem>
                <MenuItem value={'London Airport'}>London Airport</MenuItem>
              </Select>
              </FormControl>
            </Grid>
          </Grid>
        </StyledPaper>{" "}
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <img className="icon" alt="calendario" src="calendario.png"></img>
            </Grid>
            <Grid item>
              <input
                type="date"
                id="standard-basic"
                label="Standard"
                variant="standard"
                onChange={e => setDate(e.target.value)}
              />
            </Grid>
          </Grid>
        </StyledPaper>
        <div className="button">
        <ColorButton onClick={handleSubmit} type="submit" variant="contained">
          Search flights {'>'}
        </ColorButton>          
        </div>
      </Paper>
      </Box>
    </div>
  );

  
};

export default BusquedaVuelos;
