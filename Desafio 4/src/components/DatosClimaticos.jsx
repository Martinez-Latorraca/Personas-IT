import GetWeatherInLatam from "./GetWeatherInLatam";
import GetWeatherData from "./GetWeatherData";

function DatosClimaticos() {
  return (
    <div className="card card-2">
      <div className="container">
        <h4>Weather App</h4>
        <GetWeatherInLatam></GetWeatherInLatam>
        <GetWeatherData></GetWeatherData>
      </div>
    </div>
  );
}

export default DatosClimaticos;
