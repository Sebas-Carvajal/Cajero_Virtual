import { Link, useLocation } from "react-router-dom";
import "./ConfirmationAccount.css";

function ConfirmationAccount() {
  const location = useLocation();
  const { numeroCuenta } = location.state || {};

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2 className="confirmation-text">
          ¡Cuenta de ahorros creada! ✅
        </h2>
        <p className="confirmation-subtext">N° asignado: {numeroCuenta || "N/A"}</p>

        <Link to="/Login" className="confirmation-link">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationAccount;