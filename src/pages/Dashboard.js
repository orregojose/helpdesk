import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
  <h3>📌 Mesa de Ayuda</h3>
  <ul>
    <li onClick={() => navigate("/dashboard")}>🏠 Inicio</li>
    <li onClick={() => navigate("/profile")}>🙍‍♂️ Mi Perfil</li>
    <li onClick={() => navigate("/register-ticket")}>📝 Registrar Ticket</li>
    <li onClick={() => navigate("/consult-tickets")}>🔎 Consultar Tickets</li>
    <li onClick={() => navigate("/report")}>📊 Informe de Tickets</li>
    <li onClick={handleLogout}>🚪 Cerrar Sesión</li>
  </ul>
</aside>

      <main className="dashboard-content">
        <h2>🚀 Bienvenido a la Mesa de Ayuda</h2>
        <p>Aquí puedes gestionar tus tickets y recibir asistencia.</p>
      </main>
    </div>
  );
};

export default Dashboard;
