import { Link } from "react-router-dom";
import "./ConfirmationCard.css";

function ConfirmarionCard() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2 className="confirmation-text">
          Tu tarjeta ha sido asignada ✅
        </h2>
        <p className="confirmation-subtext">N° #</p>
        <p className="confirmation-subtext">CVV #</p>

        <Link to="/Login" className="confirmation-link">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}

export default ConfirmarionCard;
