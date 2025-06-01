import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const RegisterTicket = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  
  const usuario = JSON.parse(sessionStorage.getItem("usuario"));

  const handleTicketSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/register-ticket", {
        usuario_id: usuario.id, titulo, descripcion
      });

      alert(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Error registrando ticket:", error);
      alert("❌ Error al crear el ticket.");
    }
  };

  return (
    <div className="dashboard-layout"> {/* Mantiene el diseño con el menú lateral */}
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
        <h2>🎫 Registrar Nuevo Ticket</h2>
        <form onSubmit={handleTicketSubmit} className="form-container">
          <input type="text" placeholder="Título del problema" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          <textarea placeholder="Describe el problema..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
          <button type="submit">Enviar Ticket</button>
        </form>
      </main>
    </div>
  );
};

export default RegisterTicket;
