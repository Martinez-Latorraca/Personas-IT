import { useState } from "react";

function BuscarValor() {
  const [list, setList] = useState("");
  const [value, setValue] = useState("");
  const [res, setRes] = useState();

  const buscar = (e) => {
    e.preventDefault();

    const arr = list.split(" ");

    setRes(arr.indexOf(value));
  };

  return (
    <div className="card">
      <form onSubmit={buscar}>
        <div className="container">
          <label htmlFor="list">
            Ingrese una lista de números, separados por espacios:{" "}
          </label>
          <textarea
            className="input"
            name="list"
            id="list"
            cols="30"
            rows="10"
            onChange={(e) => setList(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="container">
          <label htmlFor="value">Ingrese un valor a buscar: </label>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            className="input"
            required
          />
          <button className="btn" type="submit">
            Buscar
          </button>
        </div>
      </form>
      <div className="container">
        <p>El número se encuentra el la posición: {res}</p>
      </div>
    </div>
  );
}

export default BuscarValor;
