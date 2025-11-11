import "./StyleFunction.css";
import { Link } from "react-router-dom";

function CupoCard() {
  // Obtener datos reales del localStorage si existen
  const cardData = JSON.parse(localStorage.getItem("card") || "{}");
  const cupoDisponible = cardData.cupoDisponible || 2500000;

  return (
    <div className="function-container">
      <div className="function-card">
        <h2 className="function-title">CUPO DISPONIBLE</h2>

        <div className="cupo-info">
          <p className="cupo-text">Tu cupo disponible actual es:</p>
          <h3 className="cupo-valor">${cupoDisponible.toLocaleString()}</h3>
        </div>

        <div className="function-footer">
          <Link to="/CardFunction">
            <button className="function-return">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CupoCard;