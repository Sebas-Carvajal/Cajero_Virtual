import "./AccountFunction.css";
import { Link } from "react-router-dom";

function AccountFunction() {
  return (
    <div className="ahorros-container">
      <div className="ahorros-card">
        <h2 className="ahorros-title">CUENTA DE AHORROS</h2>

        <div className="ahorros-buttons">
          <button className="ahorros-button">RETIRAR</button>
          <button className="ahorros-button">CONSIGNAR</button>
          <button className="ahorros-button">TRANSFERIR</button>
          <button className="ahorros-button">CONSULTAR SALDO</button>
          <button className="ahorros-button">CERRAR SESIÓN</button>
        </div>

        <div className="ahorros-footer">
          <Link to="/"><button className="ahorros-return">Regresar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default AccountFunction;
