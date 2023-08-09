import React, { useState } from "react";

function DatosClimaticos() {
  const [city, setCity] = useState("");

  const search = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card">
      <form onSubmit={search}>
        <div className="container">
          <h4>Whether app</h4>
          <label htmlFor="value">Ingrese una ciudad: </label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="input"
            required
          />
          <button className="btn" type="submit">
            Buscar
          </button>
        </div>
      </form>
      <div className="container"></div>
    </div>
  );
}

export default DatosClimaticos;
