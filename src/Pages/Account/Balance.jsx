import "./StyleFunction.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Balance() {
  const [saldo] = useState(1200000); 

  return (
    <div className="function-container">
      <div className="function-card">
        <h2 className="function-title">CONSULTAR SALDO</h2>

        <div className="cupo-info">
          <p className="cupo-text">Tu saldo actual es:</p>
          <h3 className="cupo-valor">${saldo.toLocaleString()}</h3>
        </div>

        <div className="function-footer">
          <Link to="/AccountFunction">
            <button className="function-return">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Balance;
