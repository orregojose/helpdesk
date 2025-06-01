import React, { useState } from "react";
import axios from "axios";
import "./style.css"; 

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [area, setArea] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/register", {
        nombre, email, telefono, area, empresa, password
      });
      alert(response.data);
    } catch (error) {
      alert("❌ Error registrando usuario.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>📝 Registrar Cuenta</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          <input type="text" placeholder="Área o departamento" value={area} onChange={(e) => setArea(e.target.value)} required />
          <input type="text" placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} required />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
