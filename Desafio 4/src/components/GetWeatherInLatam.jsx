import axios from "axios";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const capitals = [
  "Montevideo",
  "Buenos Aires",
  "Brasilia",
  "Lima",
  "Santiago de Chile",
  "Asunción",
  "Quito",
  "Bogotá",
  "Sucre",
  "Caracas",
];

function GetWeatherInLatam() {
  const [CSVData, setCSVData] = useState([]);
  useEffect(() => {
    const getWeatherCapitals = () => {
      capitals.map(async (city) => {
        const res = await axios({
          method: "GET",
          url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
            import.meta.env.VITE_API_KEY
          }`,
        });

        const response = await axios({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${
            res.data[0].lat
          }&lon=${res.data[0].lon}&lang=es&units=metric&appid=${
            import.meta.env.VITE_API_KEY
          }`,
        });
        setCSVData((current) => [
          ...current,
          {
            name: res.data[0].name,
            country: response.data.sys.country,
            desc: response.data.weather[0].description,
            feel: response.data.main.feels_like,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            tempMax: response.data.main.temp_max,
            tempMin: response.data.main.temp_min,
          },
        ]);
      });
    };
    getWeatherCapitals();
  }, []);
  return (
    <>
      <p style={{ marginBottom: 0 }}>
        Reporte del clima en las capitales de LATAM (.CSV)
      </p>
      <CSVLink
        data={CSVData}
        className="btn"
        separator={";"}
        filename="Clima-Capitales.csv"
      >
        Descargar
      </CSVLink>
    </>
  );
}

export default GetWeatherInLatam;
