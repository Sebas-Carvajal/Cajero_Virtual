import React from "react";
import { useNavigate } from "react-router-dom";

const CardFunction = () => {
  const navigate = useNavigate();

  return (
    <div className="ahorros-container">
      <div className="ahorros-card">
        <h2 className="ahorros-title">TARJETA DE CREDITO</h2>

        <div className="ahorros-buttons" style={{ alignItems: "flex-start" }}>
          <button className="ahorros-button">RETIRAR</button>
          <button className="ahorros-button">TRANSFERIR</button>
          <button className="ahorros-button">PAGAR TARJETA</button>
          <button className="ahorros-button">CUPO DISPONIBLE</button>
          <button className="ahorros-button">CERRAR SESIÓN</button>
        </div>

        <div className="ahorros-footer">
          <button className="ahorros-return" onClick={() => navigate(-1)}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFunction;
