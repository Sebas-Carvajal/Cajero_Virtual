import "./StyleFunction.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function PayCard() {
  const [monto, setMonto] = useState("");


  const handlePago = () => {
    if (!monto || monto <= 0) {
      alert("Por favor, ingrese un monto válido para pagar.");
      return;
    }
    alert(`Has pagado $${monto} a tu tarjeta de crédito.`);
    setMonto("");
  };

  return (
    <div className="function-container">
      <div className="function-card">
        <h2 className="function-title">PAGAR TARJETA DE CRÉDITO</h2>

        <input
          type="number"
          className="function-input"
          placeholder="Ingrese monto a pagar"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />

        <button onClick={handlePago} className="function-button">
          Confirmar Pago
        </button>

        <div className="function-footer">
          <Link to="/CardFunction">
            <button className="function-return">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PayCard;
