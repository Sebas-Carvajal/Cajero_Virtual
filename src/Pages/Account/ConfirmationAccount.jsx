import { Link } from "react-router-dom";
import "./ConfirmationAccount.css";

function ConfirmationAccount() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2 className="confirmation-text">
          ¡Cuenta de ahorros creada! ✅
        </h2>
        <p className="confirmation-subtext">N° asignado #</p>

        <Link to="/Login" className="confirmation-link">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationAccount;
