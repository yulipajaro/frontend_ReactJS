import React from "react";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "../styles/styles.css";
import { ThemeProvider } from "@emotion/react";
import Catalogo from "./Catalogo";
import HeaderSelect from "./HeaderSelect";
import catalogo from "./Catalogo.json";

const colortheme = createTheme({
  palette: {
    primary: { main: "#963A78", contrastText: "#fff" },
    secondary: { main: "#03a9f4", contrastText: "#fff" },
  },
});

const SelectFlight = () => {

  const selectVuelo = (e) => {
    console.log("vuelo");
    console.log(e);
  }

  //const catalogo = JSON.parse(window.sessionStorage.getItem('catalogo')); //obtenemos el catalogo del caché
  const departure = window.sessionStorage.getItem('departure');
  const arrival = window.sessionStorage.getItem('arrival');
  const date = window.sessionStorage.getItem('date');


  return (
    <>
      <HeaderSelect from={departure} to={arrival} date={date} />
      <ThemeProvider theme={colortheme}>
        <Typography color="primary" variant="h3">
          Select your flight
        </Typography>
      </ThemeProvider>
      <div>
        {catalogo.map((e) => {
          return (
            <div className="catalogo" onClick={selectVuelo}  key={e.id}>
              <Catalogo onClick={selectVuelo}
              departure={e.departureAirportName} 
              departureCity={e.departureCity}
              arrival={e.arrivalAirportName} 
              arrivalCity={e.arrivalCity}
              ticketPrice={e.ticketPrice}
              flightNumber={e.flightNumber} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectFlight;
