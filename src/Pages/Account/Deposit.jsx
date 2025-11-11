import { useState } from "react";
import "./AccountFunction.css";
import { API_BASE_URL } from '../config';
import { Link } from "react-router-dom";

function Deposit() {
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    if (!amount || amount <= 0) {
      alert("Ingrese un valor válido para consignar.");
      return;
    }

    // Obtener datos de la cuenta del localStorage
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const accountData = JSON.parse(localStorage.getItem("account") || "{}");

    try {
      const response = await fetch(`${API_BASE_URL}/api/cuentas/depositar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numeroCuenta: accountData.numeroCuenta || userData.numeroCuenta,
          monto: parseFloat(amount)
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(result.mensaje || `Has consignado $${amount} correctamente.`);
        setAmount("");
      } else {
        const error = await response.json();
        alert(error.mensaje || "Error al procesar la consignación.");
      }
    } catch (error) {
      alert("Error de conexión. Intente nuevamente.");
    }
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