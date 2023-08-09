import axios from "axios";
import { useState } from "react";

function GetWeatherData() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const search = async (e) => {
    e.preventDefault();

    const arr = city.split(" ");
    const newData = [];

    for (const city of arr) {
      try {
        setError(false);
        const coords = await axios({
          method: "GET",
          url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
            import.meta.env.VITE_API_KEY
          }`,
        });

        const response = await axios({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${
            coords.data[0].lat
          }&lon=${coords.data[0].lon}&lang=es&units=metric&appid=${
            import.meta.env.VITE_API_KEY
          }`,
        });
        newData.push({
          name: coords.data[0].name,
          desc: response.data.weather[0].description,
          temp: response.data.main.temp,
          tempMax: response.data.main.temp_max,
          tempMin: response.data.main.temp_min,
        });
      } catch (err) {
        setError(true);
      }
    }
    setData(newData);
  };
  return (
    <>
      <form onSubmit={search}>
        <label htmlFor="value">Sepa el clima en su ciudad: </label>
        <input
          type="text"
          onInput={(e) => setCity(e.target.value)}
          className="input"
          required
        />
        <button className="btn" type="submit" style={{ marginTop: "8px" }}>
          Buscar
        </button>
      </form>
      {data.map((city, index) => (
        <div className="weather-card" key={index}>
          <h5>{city.name}</h5>
          <p>
            T actual: <b> {city.temp}</b> ºC
          </p>
          <p>
            T máxima: <b>{city.tempMax} ºC</b>
          </p>
          <p>
            T mínima: <b>{city.tempMin} ºC</b>
          </p>
          <p>
            Clima: <b>{city.desc}</b>
          </p>
        </div>
      ))}
      {error && (
        <div className="container">
          <p style={{ color: "red", marginTop: 0 }}>
            {"Algo salió mal, intentelo nuevamente."}
          </p>
        </div>
      )}
    </>
  );
}

export default GetWeatherData;
