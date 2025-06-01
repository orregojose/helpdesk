import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [usuario, setUsuario] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario"));
    
    if (!usuarioGuardado) {
      navigate("/");
    } else {
      axios.get(`http://localhost:3001/user/${usuarioGuardado.id}`)
        .then((response) => {
          setUsuario(response.data);
          setFormData(response.data);
        })
        .catch((error) => console.error("❌ Error cargando perfil:", error));
    }
  }, [navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put("http://localhost:3001/update-user", { id: usuario.id, ...formData })
      .then(() => {
        alert("✅ Perfil actualizado correctamente.");
        setUsuario(formData);
        setEditMode(false);
      })
      .catch((error) => console.error("❌ Error actualizando perfil:", error));
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

      <main className="profile-container">
  <h2>🙍‍♂️ Mi Perfil</h2>
  {usuario && !editMode ? (
    <div className="profile-card">
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Correo:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.telefono}</p>
      <p><strong>Empresa:</strong> {usuario.empresa}</p>
      <p><strong>Área:</strong> {usuario.area}</p>
      <button onClick={() => setEditMode(true)}>✏️ Editar Perfil</button>
    </div>
  ) : (
    <form className="profile-form" onSubmit={handleUpdate}>
      <input type="text" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} required />
      <input type="text" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} required />
      <input type="text" value={formData.empresa} onChange={(e) => setFormData({ ...formData, empresa: e.target.value })} required />
      <input type="text" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} required />
      <button type="submit">✅ Guardar Cambios</button>
      <button type="button" onClick={() => setEditMode(false)}>❌ Cancelar</button>
    </form>
  )}
</main>

    </div>
  );
};

export default Profile;
