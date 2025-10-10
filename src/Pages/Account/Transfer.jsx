import { useState } from "react";
import "./StyleFunction.css";
import {useNavigate, useLocation } from "react-router-dom";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
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

  const handleTransfer = () => {
    if (!amount || !accountNumber) {
      alert("Ingrese el número de cuenta y el monto a transferir.");
      return;
    }
    alert(`Has transferido $${amount} a la cuenta ${accountNumber}.`);
    setAmount("");
    setAccountNumber("");
  };

  return (
    <div className="function-container">
      <div className="function-card">
        <h2 className="function-title">TRANSFERIR DINERO</h2>

        <input
          type="text"
          className="function-input"
          placeholder="Número de cuenta destino"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <input
          type="number"
          className="function-input"
          placeholder="Monto a transferir"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleTransfer} className="function-button">
          Confirmar Transferencia
        </button>

        <div className="function-footer">
            <button className="function-return" onClick={handleReturn}>Regresar</button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
