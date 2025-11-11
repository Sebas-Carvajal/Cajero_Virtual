import { useState } from "react";
import "./StyleFunction.css";
import { API_BASE_URL } from '../config';
import {useNavigate, useLocation } from "react-router-dom";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const location = useLocation();
  const isFrom = location.state?.from === "card";
  const navigate = useNavigate();

  const handleReturn = () => {
    if (isFrom) {
      navigate("/CardFunction");
    } else {
      navigate("/AccountFunction");
    }
  };

  const handleTransfer = async () => {
    if (!amount || !accountNumber) {
      alert("Ingrese el número de cuenta y el monto a transferir.");
      return;
    }

    // Obtener datos del usuario
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const accountData = JSON.parse(localStorage.getItem("account") || "{}");
    const cardData = JSON.parse(localStorage.getItem("card") || "{}");

    try {
      const endpoint = isFrom 
      ? `${API_BASE_URL}/api/tarjetas/transferir`
      : `${API_BASE_URL}/api/cuentas/transferir`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numeroOrigen: isFrom ? cardData.numeroTarjeta : accountData.numeroCuenta,
          numeroDestino: accountNumber,
          monto: parseFloat(amount)
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(result.mensaje || `Has transferido $${amount} a la cuenta ${accountNumber}.`);
        setAmount("");
        setAccountNumber("");
      } else {
        const error = await response.json();
        alert(error.mensaje || "Error al procesar la transferencia.");
      }
    } catch (error) {
      alert("Error de conexión. Intente nuevamente.");
    }
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