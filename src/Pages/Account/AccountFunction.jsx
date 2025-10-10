import "./AccountFunction.css";
import { Link } from "react-router-dom";

function AccountFunction() {
  
  const usuario = {
    nombre: "Sebastian Carvajal",
    numeroCuenta: "123456789",
  };

  return (
    <div className="ahorros-container">
      <div className="ahorros-card">
        <h2 className="ahorros-title">CUENTA DE AHORROS</h2>

        <div className="ahorros-content">
          {/* Botones de la izquierda */}
          <div className="ahorros-buttons">
            <Link to="/AccountFunction/Withdraw" state={{ from: "account"}}><button className="ahorros-button">RETIRAR</button></Link>
            <Link to="/AccountFunction/Deposit"><button className="ahorros-button">CONSIGNAR</button></Link>
            <Link to="/AccountFunction/Transfer"  state={{ from: "account"}}><button className="ahorros-button">TRANSFERIR</button></Link>
            <Link to="/AccountFunction/Balance"> <button className="ahorros-button">CONSULTAR SALDO</button></Link>
            <Link to="/Login"> <button className="ahorros-button">CERRAR SESIÓN</button></Link>                           
          </div>

          {/* Datos del usuario*/}
          <div className="ahorros-user">
            <h3>Datos del Usuario</h3>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>No. Cuenta:</strong> {usuario.numeroCuenta}</p>
          </div>
        </div>

        <div className="ahorros-footer">
          <Link to="/Login">
            <button className="ahorros-return">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountFunction;
