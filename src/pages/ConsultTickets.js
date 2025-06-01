import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ConsultTickets = () => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/tickets")
      .then((response) => setTickets(response.data))
      .catch((error) => console.error("❌ Error obteniendo tickets:", error));
  }, []);

  const actualizarEstado = (id, nuevoEstado) => {
    axios.put("http://localhost:3001/update-ticket", { id, estado: nuevoEstado })
      .then(() => {
        setTickets(tickets.map(ticket => ticket.id === id ? { ...ticket, estado: nuevoEstado } : ticket));
      })
      .catch((error) => console.error("❌ Error actualizando ticket:", error));
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

      <main className="dashboard-content">
        <h2>🔎 Consultar Tickets</h2>
        <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Título</th>
      <th>Descripción</th>
      <th>Estado</th>
      <th>Creado por</th>
      <th>Fecha de creación</th>
      <th>Acción</th>
    </tr>
  </thead>
  <tbody>
    {tickets.map(ticket => (
      <tr key={ticket.id}>
        <td>{ticket.id}</td>
        <td>{ticket.titulo}</td>
        <td>{ticket.descripcion}</td>
        <td>{ticket.estado}</td>
        <td>{ticket.creador}</td>
        <td>{new Date(ticket.fecha_creacion).toLocaleString()}</td>
        <td>
          <select value={ticket.estado} onChange={(e) => actualizarEstado(ticket.id, e.target.value)}>
            <option value="Abierto">Abierto</option>
            <option value="En proceso">En proceso</option>
            <option value="Resuelto">Resuelto</option>
            <option value="Cerrado">Cerrado</option>
          </select>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </main>
    </div>
  );
};

export default ConsultTickets;
