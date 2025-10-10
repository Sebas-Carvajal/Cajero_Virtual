import { useState } from "react";
import "./AccountFunction.css";
import { Link } from "react-router-dom";

function Deposit() {
  const [amount, setAmount] = useState("");


  const handleDeposit = () => {
    if (!amount || amount <= 0) {
      alert("Ingrese un valor válido para consignar.");
      return;
    }
    alert(`Has consignado $${amount} correctamente.`);
    setAmount("");
  };

  return (
    <div className="function-container">
      <div className="function-card">
        <h2 className="function-title">CONSIGNAR DINERO</h2>

        <input
          type="number"
          className="function-input"
          placeholder="Monto a consignar"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleDeposit} className="function-button">
          Confirmar Consignación
        </button>

        <div className="function-footer">
            <Link to="/AccountFunction">
            <button className="function-return">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
