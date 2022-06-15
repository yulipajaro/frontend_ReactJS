import axios from "axios";

const CATALOG_API_BASE_URL = "http://localhost:8000/api/v1/catalog";

class CatalogoService{

    async getCatalog(departureAirCode, arrivalAirCode, date) {
        const url = CATALOG_API_BASE_URL+'/?departureAirportCode='+departureAirCode+'&arrivalAirportCode='+arrivalAirCode+'&departureDate='+date;

        return await axios.get(url);
    }
/*
    registrarVuelo(vuelo) {
    
        return axios.post(CATALOG_API_BASE_URL, vuelo, {
          headers: {
            "Content-Type": "application/json",
          }
        })
      }
      */
}

export default new CatalogoService();