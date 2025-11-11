import { Link } from "react-router-dom";
import "./CardFunction.css";

const CardFunction = () => {
  
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const cardData = JSON.parse(localStorage.getItem("card") || "{}");

  
  const usuario = {
    nombre: userData.nombres || "Usuario",
    numeroTarjeta: cardData.numeroTarjeta || "**** **** **** ****",
  };

  return (
    <div className="ahorros-container">
      <div className="ahorros-card">
        <h2 className="ahorros-title">TARJETA DE CRÉDITO</h2>

        <div className="ahorros-content">
          {/* Botones de la izquierda */}
          <div className="ahorros-buttons">
            <Link to="/CardFunction/Withdraw" state={{from:"card"}}>
              <button className="ahorros-button">RETIRAR</button>
            </Link>
            <Link to="/CardFunction/Transfer" state={{from:"card"}}>
              <button className="ahorros-button">TRANSFERIR</button>
            </Link>
            <Link to="/CardFunction/PayCard">
              <button className="ahorros-button">PAGAR TARJETA</button>
            </Link>
            <Link to="/CardFunction/CupoCard">
              <button className="ahorros-button">CUPO DISPONIBLE</button>
            </Link>
            <Link to="/Login">
              <button className="ahorros-button" onClick={() => localStorage.clear()}>
                CERRAR SESIÓN
              </button>
            </Link> 
          </div>

          {/* Datos del usuario */}
          <div className="ahorros-user">
            <h3>Datos del Usuario</h3>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>No. Tarjeta:</strong> {usuario.numeroTarjeta}</p>
          </div>
        </div>

        {/* Botón de regreso */}
        <div className="ahorros-footer">
          <Link to="/Login">
            <button className="ahorros-return">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardFunction;