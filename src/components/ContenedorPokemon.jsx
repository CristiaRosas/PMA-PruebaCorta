import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";

export const ContenedorPokemon = ({ infoPoke }) => {

  
  const { nombre, imagen, estadisticas, habilidades } = infoPoke;

  return (
<div className="d-flex justify-content-center align-items-center vh-100">
  <div className="card" style={{ width: "28rem" }}>
    <div className="d-flex">
      {imagen && (
        <img
          src={imagen}
          className="card-img-left"
          alt={`${nombre} sprite`}
          style={{ width: "50%" }}
        />
      )}
      <div className="card-body" style={{ width: "50%" }}>
        <h5 className="card-title">Pokemon: {nombre}</h5>
        {estadisticas && estadisticas.length > 0 && (
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Estadísticas:</strong></li>
            {estadisticas
              .filter(stat => ["hp", "attack", "defense"].includes(stat.nombre.toLowerCase()))
              .map(statFiltrada => (
                <li key={statFiltrada.nombre} className="list-group-item">
                  {statFiltrada.nombre}: {statFiltrada.base}
                </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
</div>


  
  
  
  );
};


