import { useState } from "react";
import "./StyleFunction.css";
import { useNavigate,useLocation } from "react-router-dom";

function Withdraw() {
  const [amount, setAmount] = useState("");
  const location = useLocation();
  const isFrom = location.state?.from === "card";
  const navigate = useNavigate();

   const handleReturn = () => {
    if (isFrom) {
      navigate("/CardFunction");/*se usa en javascript y navigate lo uso en el return con jsx */
    } else {
      navigate("/AccountFunction");
    }
  };

  const handleWithdraw = () => {
    if (!amount || amount <= 0) {
      alert("Por favor, ingrese un monto válido para retirar.");
      return;
    }
    alert(`Has retirado $${amount} correctamente.`);
    setAmount("");
  };

  return (
    <div className="function-container">
      <div className="function-card">
        <h2 className="function-title">RETIRAR DINERO</h2>

        <input
          type="number"
          className="function-input"
          placeholder="Monto a retirar"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleWithdraw} className="function-button">
          Confirmar Retiro
        </button>

        <div className="function-footer">
            <button className="function-return" onClick={handleReturn}>Regresar</button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
