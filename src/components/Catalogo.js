import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const colortheme = createTheme({
  palette: {
    primary: { main: "#963A78", contrastText: "#fff" },
    secondary: { main: "#03a9f4", contrastText: "#fff" },
  },
});

const Catalogo = ({ departure, arrival, departureCity, flightNumber, arrivalCity, ticketPrice}) => {
  return (
    <Card className="card" sx={{ maxWidth: 445 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <p>{departure}</p>
            <ThemeProvider theme={colortheme}>
              <Typography color="primary" variant="h5">
                7:00 pm
              </Typography>
            </ThemeProvider>

            <Grid container spacing={2} className="avion">
            <img className="icon" alt="avion" src="avionUp.png"></img>
            <p>{departureCity}</p></Grid>
            <p>${ticketPrice}</p>
          </Grid>
          <Grid>
            <AccessTimeIcon/>
            <p className="icon">2hr 15min</p>
          </Grid>
          <Grid item xs={4}>
            <p>{arrival}</p>
            <ThemeProvider theme={colortheme}>
              <Typography color="primary" variant="h5">
                7:00 pm
              </Typography>
            </ThemeProvider>
            <Grid container spacing={2} className="avion">
            <img className="icon" alt="avion" src="avionDown.png"></img>
            <p>{arrivalCity}</p>
            </Grid>
            <p>Flight {flightNumber}</p>
          </Grid>
        </Grid>
      </CardContent>
      <hr/>
    </Card>
  );
};

export default Catalogo;
