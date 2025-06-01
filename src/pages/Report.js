import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Report = () => {
  const [stats, setStats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/ticket-stats")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("❌ Error obteniendo informe:", error));
  }, []);

  const data = {
    labels: stats.map(s => s.estado),
    datasets: [{
      label: "Cantidad de Tickets",
      data: stats.map(s => s.cantidad),
      backgroundColor: ["#0077b6", "#ffa500", "#28a745", "#dc3545"]
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          <li onClick={() => { sessionStorage.removeItem("usuario"); navigate("/"); }}>🚪 Cerrar Sesión</li>
        </ul>
      </aside>

      <main className="report-container">
        <h2>📊 Informe de Estado de Tickets</h2>
        {stats.length > 0 ? (
          <Bar data={data} options={options} />
        ) : (
          <p>Cargando informe...</p>
        )}
      </main>
    </div>
  );
};

export default Report;
