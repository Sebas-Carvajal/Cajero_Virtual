import { useState } from "react";
import "./StyleFunction.css";
import { useNavigate, useLocation } from "react-router-dom";

function Withdraw() {
  const [amount, setAmount] = useState("");
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

  const handleWithdraw = async () => {
    if (!amount || amount <= 0) {
      alert("Por favor, ingrese un monto válido para retirar.");
      return;
    }

    // Obtener datos del usuario
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const accountData = JSON.parse(localStorage.getItem("account") || "{}");
    const cardData = JSON.parse(localStorage.getItem("card") || "{}");

    try {
      const endpoint = isFrom 
        ? "https://tu-backend-railway.up.railway.app/api/tarjetas/retirar"
        : "https://tu-backend-railway.up.railway.app/api/cuentas/retirar";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numeroCuenta: isFrom ? cardData.numeroTarjeta : accountData.numeroCuenta,
          monto: parseFloat(amount)
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(result.mensaje || `Has retirado $${amount} correctamente.`);
        setAmount("");
      } else {
        const error = await response.json();
        alert(error.mensaje || "Error al procesar el retiro.");
      }
    } catch (error) {
      alert("Error de conexión. Intente nuevamente.");
    }
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