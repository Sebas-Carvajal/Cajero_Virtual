import { Link, useLocation } from "react-router-dom";
import "./ConfirmationCard.css";

function ConfirmationCard() { 
  const location = useLocation();
  const { numeroTarjeta, cvv } = location.state || {};

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2 className="confirmation-text">
          Tu tarjeta ha sido asignada ✅
        </h2>
        <p className="confirmation-subtext">N° {numeroTarjeta || "#"}</p>
        <p className="confirmation-subtext">CVV {cvv || "#"}</p>

        <Link to="/Login" className="confirmation-link">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationCard; 